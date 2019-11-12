import debugWrapper from '../utils/debug';

import { NODE_STORAGE, NODE_PREDICATE_MAPPING, PREDICATE_STORAGE } from "../storage";
import { NodeDefinition } from "../types/definitions/node_definiton";

const debug = debugWrapper('node-decorator');

export function Node(): ClassDecorator {
  return function nodeDecorator<TFunction extends Function>(target: TFunction): TFunction | void {
    const nodeName = target.name;

    const definition = new NodeDefinition(nodeName);

    const mapping = NODE_PREDICATE_MAPPING[nodeName];
    if (mapping) {
      definition.predicates = mapping.map(k => PREDICATE_STORAGE[k]);
      debug(`added node predicate mapping for ${nodeName}`);
    }

    NODE_STORAGE[nodeName] = definition;
    debug(definition.generateSchema());
    debug(`pushed ${nodeName} into node storage`);

    if (Reflect && Reflect.defineMetadata) {
      Reflect.defineMetadata('dgraph:node', definition, target);
      debug(`added dgraph:node metadata to ${nodeName}`);
    }
  };
}
