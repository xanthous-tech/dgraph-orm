/**
 * Storage for all metadata args of all available types.
 */
import { NodeMetadata } from './node';
import { PredicateMetadata } from './predicate';
import { FacetMetadata } from './facet';
import { PropertyMetadata } from './property';

/**
 * Internal utilities namespace.
 */
export namespace MetadataStorageUtils {
  /**
   * Closure added when Metadata storage is instantiated. This is a testing utility for flushing all metadata.
   * managed by the storage.
   *
   * Use flush() instead.
   */
  export let flushClosure: Function | null = null;

  /**
   * Flush all data.
   */
  export function flush() {
    MetadataStorageUtils.flushClosure && MetadataStorageUtils.flushClosure!();
  }
}

class MetadataStorageImpl {
  readonly nodes = new Map<string, NodeMetadata>();
  readonly properties = new Map<string, PropertyMetadata>();
  readonly predicates = new Map<string, PredicateMetadata>();
  readonly facets = new Map<string, FacetMetadata[]>();

  constructor() {
    // Register a private flush method to utilities so we can use this to clear all storage during test.
    MetadataStorageUtils.flushClosure = () => {
      this.nodes.clear();
      this.predicates.clear();
      this.facets.clear();
    };
  }

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
    const key = args.target.constructor.name;
    const metadata = new FacetMetadata(args);

    if (this.facets.has(key)) {
      this.facets.get(key)!.push(metadata);
      return;
    }

    this.facets.set(key, [metadata]);
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

  /**
   * Define a new property metadata.
   */
  addPropertyMetadata(args: PropertyMetadata.IArgs): void {
    const existingMetadata = this.properties.get(args.name);
    if (existingMetadata && existingMetadata.args.type === args.type) {
      throw new Error(`Conflicting property definition '${args.name}'`);
    }

    this.properties.set(args.name, new PropertyMetadata(args));
  }
}

export namespace MetadataStorage {
  export const Instance = new MetadataStorageImpl();
}
