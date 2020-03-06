import { Quad } from 'n3';
import * as UUID from 'instauuid';
import { plainToClass } from 'class-transformer';

import { IPredicate } from '..';
import { MetadataStorage } from '../metadata/storage';
import { PredicateMetadata } from '../metadata/predicate';
import { INode, IPlainPredicates } from '../types/data';
import { Constructor } from '../utils/class';
import { IObjectLiteral } from '../utils/type';

import { DiffTracker } from './diff-tracker';
import { FacetStorage } from './facet-storage';
import { PredicateImpl } from './predicate-impl';
import { MutationBuilder } from './mutation-builder';
import { IterableWeakMap } from '../utils/iterator';

/**
 * Create an environment for a mapped tree.
 */
export class Transaction<T extends Object, V> implements ITransaction<T> {
  /**
   * Existing tree if transaction initialized from an existing data.
   */
  private readonly _tree: T[] = [];

  /**
   * Temp uid for new generated node.
   *
   * ### NOTE
   * Fresh node node instances already have their @Uid properties
   * populated with temp uid. This map acts as a tracker for tracking new
   * created node instances when building mutation.
   */
  private readonly tempIDS = new WeakMap();

  // Track property diffs
  private readonly diff = new DiffEnvelope();

  /**
   * Initialize a fresh transaction.
   */
  constructor();

  /**
   * Initialize a transaction from an existing data.
   */
  constructor(entryCls: Constructor<T>, plain: IPlainPredicates);

  // Implementation
  constructor(entryCls?: Constructor<T>, plain?: IPlainPredicates) {
    if (entryCls && plain) {
      this._tree = this.plainToClassExecutor(entryCls, Array.from(plain), new WeakMap());
    }
  }

  //---- PUBLIC API

  public get tree(): T[] {
    return this._tree;
  }

  public getDeleteNQuads(): Quad[] {
    return new MutationBuilder(this.diff, this.tempIDS).getDeleteNQuads();
  }

  public getDeleteNQuadsString(): String {
    return new MutationBuilder(this.diff, this.tempIDS).getDeleteNQuadsString();
  }

  public getSetNQuads(): Quad[] {
    return new MutationBuilder(this.diff, this.tempIDS).getSetNQuads();
  }

  public getSetNQuadsString(): string {
    return new MutationBuilder(this.diff, this.tempIDS).getSetNQuadsString();
  }

  public delete(node: T): void;
  public delete(nodes: T[]): void;
  public delete(nodeOrNodes: T | T[]) {
    if (!Array.isArray(nodeOrNodes)) {
      nodeOrNodes = [nodeOrNodes];
    }

    for (const node of nodeOrNodes) {
      this.diff.globalDeletes.add(node);
    }

    return this;
  }

  public nodeFor<N extends Object>(nodeCls: Constructor<N>): N;
  public nodeFor<N extends Object, V extends Object>(nodeCls: Constructor<N>, data: V & { uid?: string }): N;
  public nodeFor<N extends Object, V extends Object>(nodeCls: Constructor<N>, data?: V & { uid?: string }): N {
    const uids = MetadataStorage.Instance.uids.get(nodeCls.name);
    if (!uids || uids.length === 0) {
      throw new Error('Node must have a property decorated with @Uid');
    }

    const nodeInstance = new nodeCls();
    this.trackProperties(nodeInstance);
    this.trackPredicatesForFreshNode(nodeInstance);

    let id: string;
    if (data && data.uid) {
      id = data.uid;
      // Remove the field so we don't introduce extra fields to
      //  new created node instance when assigning data to it.
      delete data.uid;
    } else {
      id = UUID('hex').toString();
      this.tempIDS.set(nodeInstance, id);
    }

    if (data) {
      // Mutate the original object so we trigger
      // a diff on the tracked properties.
      Object.assign(nodeInstance, data);
    }

    uids.forEach(m => ((nodeInstance as any)[m.args.propertyName] = id));
    return nodeInstance;
  }

  //---- END PUBLIC API

  // Private methods

  /**
   * Given a data class definition and plain object return an instance of the data class.
   */
  private plainToClassExecutor<T extends Object, V>(
    cls: Constructor<T>,
    plain: INode[],
    storage: WeakMap<Object, T>
  ): T[] {
    return plain.reduce((acc: any[], pln: INode) => {
      // Bail early if already converted.
      if (storage.has(pln)) {
        acc.push(storage.get(pln)!);
        return acc;
      }

      // Build the entry class
      const ins: T = plainToClass(cls, pln, {
        enableCircularCheck: true,
        strategy: 'exposeAll'
      });

      // Keep reference to the instance so in case of circular we can simply get it from storage and complete the circle.
      storage.set(pln, ins);
      acc.push(ins);

      this.trackProperties(ins);

      const predicates = MetadataStorage.Instance.predicates.get(ins.constructor.name);
      if (!predicates) {
        return acc;
      }

      predicates.forEach(pred => {
        this.trackPredicate(ins, pred);
        let _preds: INode[] = (pln as any)[pred.args.name];

        // If no data available assign a new data.
        if (!_preds) {
          (ins as any)[pred.args.propertyName] = [];
        }

        if (_preds) {
          if (!Array.isArray(_preds)) {
            _preds = Array.from(_preds);
          }

          (ins as any)[pred.args.propertyName] = this.plainToClassExecutor(pred.args.type(), _preds, storage);
        }
      });

      return acc;
    }, []) as T[];
  }

  /**
   * Attach diff tracker on the properties.
   * @param instance
   */
  private trackProperties<T extends Object, V>(instance: T): void {
    const properties = MetadataStorage.Instance.properties.get(instance.constructor.name);
    if (!properties) {
      return;
    }

    properties.forEach(prop => {
      // Attach a diff tracker to the property.
      // XXX: Maybe instead of tracking on instance we could track on
      //   class itself. Initially could not make it work. We could spend
      //   a little more time on it.
      const { propertyName, name } = prop.args;
      this.diff.properties.trackProperty(instance, propertyName, name);
    });

    this.diff.properties.purgeInstance(instance);

    return;
  }

  private trackPredicatesForFreshNode<T extends Object, V>(instance: T): void {
    const predicates = MetadataStorage.Instance.predicates.get(instance.constructor.name);
    if (!predicates) {
      return;
    }

    predicates.forEach(p => {
      this.trackPredicate(instance, p);
      // Trigger init for a new PredicateImpl defined in above call
      (instance as any)[p.args.propertyName] = [];
    });
  }

  private trackPredicate<T extends Object, V>(instance: T, metadata: PredicateMetadata): void {
    const { propertyName, facet, name } = metadata.args;
    const facets = MetadataStorage.Instance.facets.get((facet && facet.name) || '') || [];

    // Value envelope to store values of the decorated property.
    let storedValue: IPredicate<any, any>;

    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this; // If don't re-assign `this` will refer to a wrong variable.
    Object.defineProperty(instance, propertyName, {
      enumerable: true,
      configurable: true,

      get(): any {
        return storedValue;
      },
      set(value: PredicateImpl): void {
        if (!value || Array.isArray(value)) {
          value = new PredicateImpl(context.diff, metadata, instance, value || []);
        }

        // All children under this predicate
        const children = value.get();

        // Merge all indices seen on facet data.
        const facetDataIndices = facets.reduce<Set<string>>((acc, f) => {
          const facetPropertyName = `${name}|${f.args.propertyName}`;
          const facetData = Private.accessUnsafe(value._owner, facetPropertyName)
            ? Object.keys(Private.accessUnsafe(value._owner, facetPropertyName))
            : [];

          return new Set([...acc, ...facetData]);
        }, new Set<string>());

        // Iterate on available facets and map them
        facetDataIndices.forEach(idx => {
          const plain = facets.reduce<IObjectLiteral>((acc, f) => {
            const facetPropertyName = `${name}|${f.args.propertyName}`;
            const facetValue = Private.accessUnsafe(value._owner, facetPropertyName)[idx];

            if (facetValue) {
              acc[f.args.propertyName] = facetValue;
            }

            return acc;
          }, {});

          const facetInstance = plainToClass(facet!, plain);
          FacetStorage.attach(propertyName, instance, children[Number(idx)], facetInstance);

          // Track each facet property in facet instance and reset it..
          facets.forEach(f => context.diff.facets.trackProperty(facetInstance, f.args.propertyName));
          context.diff.facets.purgeInstance(facetInstance);
        });

        facets.forEach(f => {
          const facetPropertyName = `${name}|${f.args.propertyName}`;
          delete (value._owner as any)[facetPropertyName];
        });

        storedValue = value;
      }
    });
  }
}

/**
 * Module private statics
 */
namespace Private {
  /**
   * Unsafe access to a class instances data.
   */
  export function accessUnsafe(instance: any, property: string): any {
    return instance[property];
  }
}

/**
 * Transaction is a container for all the changes made to a node graph.
 * It tracks of the diffs for managed nodes.
 *
 * @category PublicAPI
 */
export interface ITransaction<T> {
  /**
   * Existing tree if transaction initialized from an existing data.
   */
  tree: T[];

  /**
   * Tag a node for deletion. Unlike deleting on a predicate this will
   * not delete the incoming edge on the node. It will append a delete
   * triplet to delete nquads.
   */
  delete<N extends Object>(node: N): void;

  /**
   * Tag a nodes for deletion. Unlike deleting on a predicate this will
   * not delete the incoming edge on the node. It will append delete
   * triplets to delete nquads.
   */
  delete<N extends Object>(nodes: N[]): void;
  /**
   * Initialize a fresh node object.
   */
  nodeFor<N extends Object>(nodeCls: Constructor<N>): N;

  /**
   * Initialize a node object from data.
   */
  nodeFor<N extends Object, V extends Object>(nodeCls: Constructor<N>, data: V): N;

  /**
   * Get set nQuads for transaction.
   */
  getSetNQuads(): Quad[];

  /**
   * Get set nQuads for transaction.
   */
  getSetNQuadsString(): String;

  /**
   * Get delete nQuads for transaction.
   */
  getDeleteNQuads(): Quad[];

  /**
   * Get delete nQuads for transaction.
   */
  getDeleteNQuadsString(): String;
}

/**
 * An envelope for wrapping diff for all tracked values within
 *  a transaction.
 */
export interface IDiffEnvelope<T> {
  readonly facets: DiffTracker;
  readonly properties: DiffTracker;

  readonly globalDeletes: Set<T>;
  readonly deletes: IterableWeakMap<IPredicate<any, any>, Set<T>>;
  readonly predicates: IterableWeakMap<IPredicate<any, any>, Set<T>>;
}

class DiffEnvelope<T> implements IDiffEnvelope<T> {
  public readonly facets = new DiffTracker();
  public readonly properties = new DiffTracker();

  public readonly globalDeletes = new Set<T>();
  public readonly deletes = new IterableWeakMap<IPredicate<any, any>, Set<T>>();
  public readonly predicates = new IterableWeakMap<IPredicate<any, any>, Set<T>>();
}
