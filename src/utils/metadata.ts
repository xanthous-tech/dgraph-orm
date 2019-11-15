import debugWrapper from './debug';

import { NodeDefinition } from '../types/definitions/node_definiton';
import { PredicateDefinition } from '../types/definitions/predicate_definition';
import { FacetDefinition } from '../types/definitions/facet_definition';

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

export function addFacetMetadata(target: Function, property: string, definition: FacetDefinition): void {
  if (!Reflect || !Reflect.defineMetadata) {
    throw new Error('please check reflect-metadata import');
  }

  const mKey = metadataKey(FACET);
  Reflect.defineMetadata(mKey, definition, target, property);

  debug(`added ${mKey} metadata to ${target.name} on property ${property}`);
}

function metadataExists(mKey: string, target: Function, property: string): boolean {
  if (!Reflect || !Reflect.hasMetadata) {
    throw new Error('please check reflect-metadata import');
  }

  return Reflect.hasMetadata(mKey, target, property);
}

export function isPredicate(target: Function, property: string): boolean {
  const mKey = metadataKey(PREDICATE);
  return metadataExists(mKey, target, property);
}

export function isFacet(target: Function, property: string): boolean {
  const mKey = metadataKey(FACET);
  return metadataExists(mKey, target, property);
}

export function getPredicateDefinition(target: Function, property: string): PredicateDefinition | undefined {
  if (!Reflect || !Reflect.getMetadata) {
    throw new Error('please check reflect-metadata import');
  }

  const mKey = metadataKey(PREDICATE)
  return Reflect.getMetadata(mKey, target, property);
}

export function getFacetDefinition(target: Function, property: string): FacetDefinition | undefined {
  if (!Reflect || !Reflect.getMetadata) {
    throw new Error('please check reflect-metadata import');
  }

  const mKey = metadataKey(FACET)
  return Reflect.getMetadata(mKey, target, property);
}

export function getNodeDefinition(target: Object): NodeDefinition | undefined {
  if (!Reflect || !Reflect.getMetadata) {
    throw new Error('please check reflect-metadata import');
  }

  const mKey = metadataKey(NODE)
  return Reflect.getMetadata(mKey, target.constructor);
}
