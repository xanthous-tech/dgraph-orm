/**
 * Storage for all metadata args of all available types.
 */
import { NodeMetadata } from './node';
import { PredicateMetadata } from './predicate';
import { FacetMetadata } from './facet';

class MetadataStorageImpl {
  readonly nodes = new Map<string, NodeMetadata>();
  readonly predicates = new Map<string, PredicateMetadata>();
  readonly facets = new Map<string, FacetMetadata>();

  /**
   * Define a new node metadata.
   */
  addNodeMetadata(args: NodeMetadata.IArgs): void {
    if (this.nodes.has(args.name)) {
      throw new Error(`Duplicate node '${args.name}' detected. Please verify each Node definition has a unique name.`);
    }

    this.nodes.set(args.name, new NodeMetadata(args));
  }

  /**
   * Define a new facet metadata.
   */
  addFacetMetadata(args: FacetMetadata.IArgs): void {
    this.facets.set('NOOP', new FacetMetadata(args));
  }

  /**
   * Define a new predicate metadata.
   */
  addPredicateMetadata(args: PredicateMetadata.IArgs): void {
    const existingMetadata = this.predicates.get(args.name);
    if (existingMetadata && existingMetadata.args.type === args.type) {
      throw new Error(`Conflicting predicate definition '${args.name}'`);
    }

    this.predicates.set(args.name, new PredicateMetadata(args));
  }
}

export namespace MetadataStorage {
  export const Instance = new MetadataStorageImpl();
}
