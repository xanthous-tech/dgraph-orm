import { Type } from 'class-transformer';

import debugWrapper from '../utils/debug';
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

      // call class-transformer's @Type to set up plainToClass conversion
      if (typeof options.type === 'function') {
        const typ: Function = options.type;
        debug(`injecting class-transformer's @Type to property ${key}`);
        Type(() => typ)(target, key);
      }

    } else {
      const reflectedType: Function = Reflect && (Reflect as any).getMetadata ? (Reflect as any).getMetadata('design:type', target, key) : undefined;

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

    if (key in PREDICATE_STORAGE) {
      // TODO: error for now, need to compare if the definition is the same
      throw new Error(`predicate ${key} already defined`);
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
