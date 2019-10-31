import debugWrapper from '../utils/debug';

import { PredicateOptions } from '../types/options/predicate_options';
import { PredicateDefinition } from '../types/definitions/predicate_definition';

import { PREDICATE_STORAGE, NODE_PREDICATE_MAPPING } from '../storage';

const debug = debugWrapper('predicate-decorator');

export function Predicate(options?: PredicateOptions): PropertyDecorator {
  return function predicateDecorator(target: Object, key: string): void {
    const definition = new PredicateDefinition();
    definition.name = key;

    if (options && options.type) {
      definition.type = options.type;
    } else {
      const reflectedType: Function = Reflect && (Reflect as any).getMetadata ? (Reflect as any).getMetadata('design:type', target, key) : undefined;
      debug(`predicate ${key} reflected type ${reflectedType.name.toLowerCase()}`);
      definition.type = reflectedType.name.toLowerCase();
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

    const parent = target.constructor.name;

    if (NODE_PREDICATE_MAPPING[parent] && NODE_PREDICATE_MAPPING[parent].length) {
      NODE_PREDICATE_MAPPING[parent].push(key);
    } else {
      NODE_PREDICATE_MAPPING[parent] = [key];
    }

    debug(`predicate ${key} mapped to node ${parent}`);
  }
}
