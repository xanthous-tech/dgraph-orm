import { IPredicate } from '../index';
import { FacetStorage } from './facet-storage';
import { IDiffEnvelope } from './transaction';
import { PredicateMetadata } from '../metadata/predicate';
import { MetadataStorage } from '../metadata/storage';

/**
 * Concrete implementation of the Predicate interface.
 *
 * ### NOTE
 * Node definition overrides the predicate types.
 */
export class PredicateImpl<T = any, U = any> implements IPredicate<T, U> {
  private _facet: U | null = null;

  private readonly _diff: IDiffEnvelope<T>;

  constructor(
    diff: IDiffEnvelope<T>,
    readonly _metadata: PredicateMetadata,
    readonly _owner: Object,
    private readonly _data: T[]
  ) {
    diff.deletes.set(this, new Set());
    diff.predicates.set(this, new Set());

    this._diff = diff;
  }

  withFacet(facet: U | null): IPredicate<T, U> {
    this._facet = facet;
    return this;
  }

  getFacet(node: T): U | undefined {
    return FacetStorage.get(this._metadata.args.propertyName, this._owner, node);
  }

  add(node: T): IPredicate<T, U> {
    if (this._facet) {
      FacetStorage.attach(this._metadata.args.propertyName, this._owner, node, this._facet);
      this.trackFacetValues(this._facet);
      this._facet = null;
    }

    this._data.push(node);
    if (this._owner.trackChanges) {
      this._diff.predicates.get(this)!.add(node);
    }

    return this;
  }

  update(node: T): IPredicate<T, U> {
    if (!this._facet) {
      FacetStorage.detach(this._metadata.args.propertyName, this._owner, node);
      return this;
    }

    FacetStorage.attach(this._metadata.args.propertyName, this._owner, node, this._facet);
    this.trackFacetValues(this._facet);
    this._facet = null;

    return this;
  }

  get(): ReadonlyArray<T> {
    return this._data;
  }

  getDiff(): Set<T> {
    return this._diff.predicates.get(this)!;
  }

  delete(node: T): IPredicate<T, U>;
  delete(nodes: T[]): IPredicate<T, U>;
  delete(nodeOrNodes: T | T[]): IPredicate<T, U> {
    if (!Array.isArray(nodeOrNodes)) {
      nodeOrNodes = [nodeOrNodes];
    }

    const deleteDiff = this._diff.deletes.get(this)!;
    for (const node of nodeOrNodes) {
      deleteDiff.add(node);
      this._data.splice(
        this._data.findIndex(n => n === node),
        1
      );
    }

    return this;
  }

  deleteAll(): IPredicate<T, U> {
    this.delete(Array.from(this._data));
    return this;
  }

  private trackFacetValues(facet: Object): void {
    const metadata = MetadataStorage.Instance.facets.get(facet.constructor.name);
    if (!metadata) {
      return;
    }

    for (const meta of metadata) {
      this._diff.facets.trackProperty(facet, meta.args.propertyName);
    }
  }
}
