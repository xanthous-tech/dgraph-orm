import debugWrapper from '../utils/debug';

import { addNodeDefinitionMetadata, getFacetDefinition } from '../utils/metadata';

import { NodeDefinition } from '../types/definitions/node_definiton';

import { NODE_STORAGE, NODE_PREDICATE_MAPPING, PREDICATE_STORAGE, NODE_FACET_MAPPING } from '../storage';
import { FacetDefinition } from 'src/types/definitions/facet_definition';
import { PredicateDefinition } from 'src/types/definitions/predicate_definition';

const debug = debugWrapper('node-decorator');

export function Node(): ClassDecorator {
  return function nodeDecorator<TFunction extends Function>(target: TFunction): TFunction | void {
    const nodeName = target.name;

    const definition = new NodeDefinition(nodeName);

    const nodePredicateMapping = NODE_PREDICATE_MAPPING[nodeName];
    if (nodePredicateMapping) {
      definition.predicates = nodePredicateMapping.reduce((acc: { [key: string]: PredicateDefinition }, k) => {
        acc[k] = PREDICATE_STORAGE[k];
        return acc;
      }, {});
      debug(`added node predicate mapping for ${nodeName}`);
    }

    const nodeFacetMapping = NODE_FACET_MAPPING[nodeName];
    if (nodeFacetMapping) {
      definition.facets = nodeFacetMapping.reduce((acc: { [key: string]: FacetDefinition }, k) => {
        acc[k] = getFacetDefinition(target, k) as FacetDefinition;
        return acc;
      }, {});
      debug(`added node facet mapping for ${nodeName}`);
    }

    NODE_STORAGE[nodeName] = definition;
    debug(definition.generateSchema());
    debug(`pushed ${nodeName} into node storage`);

    addNodeDefinitionMetadata(target, definition);
  };
}
