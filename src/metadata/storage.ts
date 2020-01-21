/**
 * Storage for all metadata args of all available types.
 */
import { NodeMetadata } from './node';
import { PredicateMetadata } from './predicate';
import { FacetMetadata } from './facet';
import { IndexMetadata, PropertyMetadata } from './property';
import { UidMetadata } from './uid';
import { WithFacetMetadata } from './with-facet';

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
  // eslint-disable-next-line prefer-const
  export let flushClosure: Function | null = null;

  /**
   * Flush all data.
   */
  export function flush(): void {
    MetadataStorageUtils.flushClosure && MetadataStorageUtils.flushClosure();
  }
}

class MetadataStorageImpl {
  // Metadata storage maps..
  // Key of each map is the Node name which the metadata is defined on.
  readonly nodes = new Map<string, NodeMetadata>();
  readonly properties = new Map<string, PropertyMetadata[]>();
  readonly predicates = new Map<string, PredicateMetadata[]>();
  readonly uids = new Map<string, UidMetadata[]>();
  readonly indices = new Map<string, IndexMetadata[]>();
  readonly withFacets = new Map<string, WithFacetMetadata[]>();
  readonly facets = new Map<string, FacetMetadata[]>();

  constructor() {
    // Register a private flush method to utilities so we can use this to clear all storage during test.
    MetadataStorageUtils.flushClosure = (): void => {
      this.nodes.clear();
      this.predicates.clear();
      this.withFacets.clear();
      this.properties.clear();
      this.uids.clear();
      this.indices.clear();
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
   * Define a facet information of a predicate.
   */
  addWithFacetMetadata(args: WithFacetMetadata.IArgs): void {
    const key = args.target.constructor.name;
    const metadata = new WithFacetMetadata(args);

    if (this.withFacets.has(key)) {
      this.withFacets.get(key)!.push(metadata);
      return;
    }

    this.withFacets.set(key, [metadata]);
  }

  /**
   * Define a new facet definition.
   */
  addFacetMetadata(args: FacetMetadata.IArgs): void {
    const metadata = new FacetMetadata(args);

    if (this.facets.has(args.target.constructor.name)) {
      this.facets.get(args.target.constructor.name)!.push(metadata);
      return;
    }

    this.facets.set(args.target.constructor.name, [metadata]);
  }

  /**
   * Define a new predicate metadata.
   */
  addPredicateMetadata(args: PredicateMetadata.IArgs): void {
    const existingMetadata = this.predicates.get(args.target.constructor.name);
    const checkConflict = (a: PredicateMetadata): boolean => a.args.type === args.type && a.args.name === args.name;
    if (existingMetadata && existingMetadata.some(m => checkConflict(m))) {
      throw new Error(`Conflicting predicate definition '${args.name}'`);
    }

    if (existingMetadata) {
      existingMetadata.push(new PredicateMetadata(args));
      return;
    }

    this.predicates.set(args.target.constructor.name, [new PredicateMetadata(args)]);
  }

  /**
   * Define a new property metadata.
   */
  addPropertyMetadata(args: PropertyMetadata.IArgs): void {
    const existingMetadata = this.properties.get(args.target.constructor.name);
    const checkConflict = (a: PropertyMetadata): boolean => a.args.type === args.type && a.args.name === args.name;
    if (existingMetadata && existingMetadata.some(m => checkConflict(m))) {
      throw new Error(`Conflicting property definition '${args.name}'`);
    }

    if (existingMetadata) {
      existingMetadata.push(new PropertyMetadata(args));
      return;
    }

    this.properties.set(args.target.constructor.name, [new PropertyMetadata(args)]);
  }

  /**
   * Define a new uid property metadata.
   */
  addUidMetadata(args: UidMetadata.IArgs): void {
    const existingMetadata = this.uids.get(args.target.constructor.name);
    if (existingMetadata) {
      existingMetadata.push(new UidMetadata(args));
      return;
    }

    this.uids.set(args.target.constructor.name, [new UidMetadata(args)]);
  }

  /**
   * Define a new index property metadata.
   */
  addIndexMetadata(args: IndexMetadata.IArgs): void {
    const existingMetadata = this.indices.get(args.target.constructor.name);
    if (existingMetadata) {
      existingMetadata.push(new IndexMetadata(args));
      return;
    }

    this.indices.set(args.target.constructor.name, [new IndexMetadata(args)]);
  }
}

export namespace MetadataStorage {
  export const Instance = new MetadataStorageImpl();
}
