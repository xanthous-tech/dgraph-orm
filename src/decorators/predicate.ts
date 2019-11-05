import debugWrapper from '../utils/debug';

import { PredicateOptions } from '../types/options/predicate_options';
import { PredicateDefinition } from '../types/definitions/predicate_definition';

import { PREDICATE_STORAGE, NODE_PREDICATE_MAPPING } from '../storage';
import { DgraphType, INFERRED_TYPE } from '../types/dgraph_types';

const debug = debugWrapper('predicate-decorator');

export function Predicate(options?: PredicateOptions): PropertyDecorator {
  return function predicateDecorator(target: Object, key: string): void {
    const definition = new PredicateDefinition();
    definition.name = key;

    if (options && options.type) {
      definition.type = options.type;
      definition.isArray = !!options.isArray;
    } else {
      const reflectedType: Function = Reflect && (Reflect as any).getMetadata ? (Reflect as any).getMetadata('design:type', target, key) : undefined;
      const reflectedTypeName: string = reflectedType.name.toLowerCase();
      debug(`predicate ${key} reflected type ${reflectedTypeName}`);
      if (reflectedType === Array) {
        throw new Error(`cannot infer array types for predicate ${key}, please define type in options`);
      } else {
        const reflectedDraphType: DgraphType = INFERRED_TYPE[reflectedTypeName];
        if (!reflectedDraphType) {
          throw new Error(`cannot infer type for predicate ${key}, please define type in options`);
        }
        definition.type = reflectedDraphType;
        definition.isArray = false;
      }
    }

    if (options && options.index) {
      definition.index = options.index;
    }

    if (options && options.count) {
      definition.count = options.count;
    }

    if (key in PREDICATE_STORAGE) {
      // TODO: error for now, need to compare if the definition is the same
      throw new Error(`predicate ${key} already defined`);
    }

    PREDICATE_STORAGE[key] = definition;
    debug(`pushed ${key} into predicate storage`);

    const parent = target.constructor;
    const parentName = parent.name;

    if (NODE_PREDICATE_MAPPING[parentName] && NODE_PREDICATE_MAPPING[parentName].length) {
      NODE_PREDICATE_MAPPING[parentName].push(key);
    } else {
      NODE_PREDICATE_MAPPING[parentName] = [key];
    }

    debug(`predicate ${key} mapped to node ${parentName}`);
  }
}
