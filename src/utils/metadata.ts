import debugWrapper from './debug';

import { NodeDefinition } from '../types/definitions/node_definiton';
import { PredicateDefinition } from '../types/definitions/predicate_definition';

const debug = debugWrapper('metadata-utils');

const NODE = 'node';
const PREDICATE = 'predicate';
const FACET = 'facet';

function metadataKey(key: string): string {
  return `dgraph:${key}`;
}

export function addNodeDefinitionMetadata(target: Function, definition: NodeDefinition): void {
  if (!Reflect || !Reflect.defineMetadata) {
    throw new Error('please check reflect-metadata import');
  }

  const mKey = metadataKey(NODE);
  Reflect.defineMetadata(mKey, definition, target);

  debug(`added ${mKey} metadata to ${target.name}`);
}

export function addPredicateDefinitionMetadata(target: Function, property: string, definition: PredicateDefinition): void {
  if (!Reflect || !Reflect.defineMetadata) {
    throw new Error('please check reflect-metadata import');
  }

  const mKey = metadataKey(PREDICATE);
  Reflect.defineMetadata(mKey, definition, target, property);

  debug(`added ${mKey} metadata to ${target.name} on property ${property}`);
}

export function addFacetMetadata(target: Function, property: string, prefix: string): void {
  if (!Reflect || !Reflect.defineMetadata) {
    throw new Error('please check reflect-metadata import');
  }

  const mKey = metadataKey(FACET);
  Reflect.defineMetadata(mKey, prefix, target, property);

  debug(`added ${mKey} metadata to ${target.name} on property ${property}`);
}
