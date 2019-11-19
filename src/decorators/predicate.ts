import { Type } from 'class-transformer';

import debugWrapper from '../utils/debug';
import { DefaultValue } from '../utils/class';
import { addPredicateDefinitionMetadata } from '../utils/metadata';

import { PredicateOptions } from '../types/options/predicate_options';
import { PredicateDefinition } from '../types/definitions/predicate_definition';
import { DgraphType, INFERRED_TYPE } from '../types/dgraph_types';

import { PREDICATE_STORAGE, NODE_PREDICATE_MAPPING } from '../storage';

const debug = debugWrapper('predicate-decorator');

export function Predicate(options: PredicateOptions = {}): PropertyDecorator {
  /**
   * @param target
   * @param key
   * @param keyAlias Custom name defined by user for the predicate. Check `PredicateOptions.name`.
   */
  function createPredicateDefinition(target: Object, key: string, keyAlias: string): PredicateDefinition {
    const definition = new PredicateDefinition();
    definition.name = keyAlias;

    if (options && options.type) {
      definition.type = options.type;
      definition.isArray = !!options.isArray;
    } else {
      const reflectedType: Function =
        Reflect && (Reflect as any).getMetadata ? (Reflect as any).getMetadata('design:type', target, key) : undefined;

      if (!reflectedType) {
        throw new Error(`cannot infer type for predicate ${keyAlias}, please define type in options`);
      }

      const reflectedTypeName: string = reflectedType.name.toLowerCase();

      debug(`predicate ${keyAlias} reflected type ${reflectedTypeName}`);

      if (reflectedType === Array) {
        throw new Error(`cannot infer array types for predicate ${keyAlias}, please define type in options`);
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
    const predicateKey = Private.buildPredicateName(target, key, options);
    const definition = createPredicateDefinition(target, key, predicateKey);

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

    if (Private.shouldPreventPredicate(predicateKey, definition)) {
      throw new Error(`Cannot define predicate ${predicateKey} because it has conflicting types between definitions`);
    }

    PREDICATE_STORAGE[predicateKey] = definition;

    debug(definition.generateSchema());
    debug(`pushed ${predicateKey} into predicate storage`);

    const parent = target.constructor;
    const parentName = parent.name;

    if (NODE_PREDICATE_MAPPING[parentName] && NODE_PREDICATE_MAPPING[parentName].length) {
      NODE_PREDICATE_MAPPING[parentName].push(predicateKey);
    } else {
      NODE_PREDICATE_MAPPING[parentName] = [predicateKey];
    }

    debug(`predicate ${predicateKey} mapped to node ${parentName}`);

    addPredicateDefinitionMetadata(parent, predicateKey, definition);
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

  export function buildPredicateName(target: Object, key: string, options: PredicateOptions): string {
    if (options.name) {
      return options.name;
    }

    return `${target.constructor.name}.${key}`;
  }
}
