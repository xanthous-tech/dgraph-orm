import { Type } from 'class-transformer';

import debugWrapper from '../utils/debug';
import { DefaultValue } from '../utils/class';
import { addPredicateDefinitionMetadata } from '../utils/metadata';

import { PredicateOptions } from '../types/options/predicate_options';
import { PredicateDefinition } from '../types/definitions/predicate_definition';
import { DgraphType, INFERRED_TYPE } from '../types/dgraph_types';

import { PREDICATE_STORAGE, NODE_PREDICATE_MAPPING } from '../storage';

const debug = debugWrapper('predicate-decorator');

export function Predicate(options?: PredicateOptions): PropertyDecorator {
  function createPredicateDefinition(target: Object, key: string): PredicateDefinition {
    const definition = new PredicateDefinition();
    definition.name = key;

    if (options && options.type) {
      definition.type = options.type;
      definition.isArray = !!options.isArray;
    } else {
      const reflectedType: Function =
        Reflect && (Reflect as any).getMetadata ? (Reflect as any).getMetadata('design:type', target, key) : undefined;

      if (!reflectedType) {
        throw new Error(`cannot infer type for predicate ${key}, please define type in options`);
      }

      const reflectedTypeName: string = reflectedType.name.toLowerCase();

      debug(`predicate ${key} reflected type ${reflectedTypeName}`);

      if (reflectedType === Array) {
        throw new Error(`cannot infer array types for predicate ${key}, please define type in options`);
      }

      const reflectedDraphType: DgraphType = INFERRED_TYPE[reflectedTypeName];

      if (!reflectedDraphType) {
        // cannot find the reflected type, should be uid
        definition.type = DgraphType.Uid;
      } else {
        definition.type = reflectedDraphType;
      }

      definition.isArray = false;
    }

    // TODO: validation logic - what types can use @index, @lang, @count, @reverse, etc

    if (options && options.index) {
      definition.index = options.index;
    }

    if (options && options.lang) {
      definition.lang = options.lang;
    }

    if (options && options.count) {
      definition.count = options.count;
    }

    if (options && options.reverse) {
      definition.reverse = options.reverse;
    }

    return definition;
  }

  return function predicateDecorator(target: Object, key: string): void {
    const definition = createPredicateDefinition(target, key);

    // call class-transformer's @Type to set up plainToClass conversion
    if (typeof definition.type === 'function') {
      const typ: Function = definition.type;
      debug(`injecting class-transformer's @Type to property ${key}`);
      Type(() => typ)(target, key);
    }

    // set default value to empty array for array types
    if (definition.isArray) {
      DefaultValue([])(target, key);
    }

    if (Private.shouldPreventPredicate(key, definition)) {
      throw new Error(`Cannot define predicate ${key} because it has conflicting types between definitions`);
    }

    PREDICATE_STORAGE[key] = definition;

    debug(definition.generateSchema());
    debug(`pushed ${key} into predicate storage`);

    const parent = target.constructor;
    const parentName = parent.name;

    if (NODE_PREDICATE_MAPPING[parentName] && NODE_PREDICATE_MAPPING[parentName].length) {
      NODE_PREDICATE_MAPPING[parentName].push(key);
    } else {
      NODE_PREDICATE_MAPPING[parentName] = [key];
    }

    debug(`predicate ${key} mapped to node ${parentName}`);

    addPredicateDefinitionMetadata(parent, key, definition);
  };
}

/**
 * Module private statics.
 */
namespace Private {
  /**
   * Check if we should interrupt the predicate definition.
   */
  export function shouldPreventPredicate(key: string, definition: PredicateDefinition): boolean {
    let shouldPrevent = false;

    if (key in PREDICATE_STORAGE) {
      const existing = PREDICATE_STORAGE[key];
      shouldPrevent = !existing.equals(definition);
    }

    return shouldPrevent;
  }
}
