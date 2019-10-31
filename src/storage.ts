import { NodeDefinition } from './types/definitions/node_definiton';
import { PredicateDefinition } from './types/definitions/predicate_definition';

export const NODE_STORAGE: {
  [key: string]: NodeDefinition;
} = {};

export const PREDICATE_STORAGE: {
  [key: string]: PredicateDefinition;
} = {};

export const NODE_PREDICATE_MAPPING: {
  [key: string]: string[];
} = {};