import { IPredicate } from '../index';
import { FacetStorage } from './facet-storage';
import { IDiffEnvelope } from './transaction';
import { PredicateMetadata } from '../metadata/predicate';

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
    readonly _parent: Object,
    private readonly _data: T[]
  ) {
    diff.predicates.set(this, new Set());
    this._diff = diff;
  }

  withFacet(facet: U | null): IPredicate<T, U> {
    this._facet = facet;
    return this;
  }

  getFacet(node: T): U | undefined {
    return FacetStorage.get(this._metadata.args.propertyName, this._parent, node);
  }

  add(node: T): IPredicate<T, U> {
    if (this._facet) {
      FacetStorage.attach(this._metadata.args.propertyName, this._parent, node, this._facet);
      // TODO: Set a diff tracker on facet value.
      this._facet = null;
    }

    this._data.push(node);
    this._diff.predicates.get(this)!.add(node);

    return this;
  }

  update(node: T): IPredicate<T, U> {
    if (!this._facet) {
      FacetStorage.detach(this._metadata.args.propertyName, this._parent, node);
      return this;
    }

    FacetStorage.attach(this._metadata.args.propertyName, this._parent, node, this._facet);
    // TODO: Set a diff tracker on facet value.
    return this;
  }

  get(): ReadonlyArray<T> {
    return this._data;
  }

  getDiff(): Set<T> {
    return this._diff.predicates.get(this)!;
  }

  detach(node: T): IPredicate<T, U> {
    console.log(this._parent);
    console.log(this._data);

    throw new Error('Not implemented');
  }

  delete(node: T): IPredicate<T, U> {
    console.log(this._parent);
    console.log(this._data);

    throw new Error('Not implemented');
  }
}
