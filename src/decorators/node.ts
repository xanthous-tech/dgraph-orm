import debugWrapper from '../utils/debug';

import { NODE_STORAGE } from "../storage";
import { NodeDefinition } from "../types/definitions/node_definiton";

const debug = debugWrapper('node-decorator');

export function Node(): ClassDecorator {
  return function nodeDecorator<TFunction extends Function>(target: TFunction): TFunction | void {
    const definition = new NodeDefinition(target.name);
    NODE_STORAGE[target.name] = definition;
    debug(`pushed ${target.name} into node storage`);
  }
}