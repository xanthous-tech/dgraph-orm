import { Expose } from 'class-transformer';

import debugWrapper from '../utils/debug';
import { addFacetMetadata } from '../utils/metadata';

import { DgraphType, INFERRED_TYPE } from '../types/dgraph_types';
import { FacetOptions } from '../types/options/facet_options';
import { FacetDefinition } from '../types/definitions/facet_definition';

import { NODE_FACET_MAPPING } from '../storage';

const debug = debugWrapper('facet-decorator');

export function Facet(options: FacetOptions | string): PropertyDecorator {
  return function facetDecorator(target: Object, key: string): void {
    const definition = new FacetDefinition();

    let prefix: string;

    if (typeof options === 'string') {
      prefix = options;
    } else {
      prefix = options.prefix;
    }

    const name = `${prefix}|${key}`;
    const exposeDecorator = Expose({
      name,
      toClassOnly: true,
    });

    definition.name = key;
    definition.predicate = prefix;

    const reflectedType: Function = Reflect && (Reflect as any).getMetadata ? (Reflect as any).getMetadata('design:type', target, key) : undefined;
    if (!reflectedType) {
      throw new Error(`cannot infer type for facet ${key}, please use the allowed types`);
    }

    const reflectedTypeName: string = reflectedType.name.toLowerCase();
    debug(`facet ${key} reflected type ${reflectedTypeName}`);

    const reflectedDraphType: DgraphType = INFERRED_TYPE[reflectedTypeName];

    if (!reflectedDraphType
      || (reflectedDraphType !== DgraphType.String
          && reflectedDraphType !== DgraphType.Bool
          && reflectedDraphType !== DgraphType.Int
          && reflectedDraphType !== DgraphType.Float
          && reflectedDraphType !== DgraphType.DateTime)
    ) {
      throw new Error(`cannot infer type for facet ${key} with reflected type ${reflectedTypeName}, please use the allowed types`);
    } else {
      definition.type = reflectedDraphType;
    }

    const parent = target.constructor;
    const parentName = parent.name;

    addFacetMetadata(parent, key, definition);

    if (NODE_FACET_MAPPING[parentName] && NODE_FACET_MAPPING[parentName].length) {
      NODE_FACET_MAPPING[parentName].push(key);
    } else {
      NODE_FACET_MAPPING[parentName] = [key];
    }

    debug(`facet ${key} mapped to node ${parentName}`);

    // basically we wrap class-transformer's @Expose to achieve facet mapping
    return exposeDecorator(target, key);
  };
}
