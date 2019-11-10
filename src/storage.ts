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

export function getGlobalDgraphSchema(): string {
  const typedSchema = Object.keys(NODE_STORAGE).map((nodeName: string) => {
    const nodeDef = NODE_STORAGE[nodeName];
    return nodeDef.generateSchema();
  }).join('\n');

  const rawSchema = Object.keys(PREDICATE_STORAGE).map((predicateName: string) => {
    const predicateDef = PREDICATE_STORAGE[predicateName];
    return predicateDef.generateSchema();
  }).join('\n');

  return typedSchema + '\n' + rawSchema;
}