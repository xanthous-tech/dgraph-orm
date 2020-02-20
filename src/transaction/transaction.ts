import { Quad } from 'n3';
import * as UUID from 'instauuid';
import { plainToClass } from 'class-transformer';

import { IPredicate } from '..';
import { MetadataStorage } from '../metadata/storage';
import { PredicateMetadata } from '../metadata/predicate';
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
  constructor(entryCls: Constructor<T>, plain: V[]);

  // Implementation
  constructor(entryCls?: Constructor<T>, plain?: V[]) {
    if (entryCls && plain) {
      this._tree = this.plainToClassExecutor(entryCls, plain, new WeakMap());
      this._tree.forEach(i => {
        this.diff.facets.purgeInstance(i);
        this.diff.properties.purgeInstance(i);
      });
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

  public nodeFor<N extends Object>(nodeCls: Constructor<N>): N {
    const uids = MetadataStorage.Instance.uids.get(nodeCls.name);
    if (!uids) {
      throw new Error('Node must have a property decorated with @Uid');
    }

    const nodeInstance = new nodeCls();

    const tempID = UUID('hex').toString();
    this.tempIDS.set(nodeInstance, tempID);
    uids.forEach(m => ((nodeInstance as any)[m.args.propertyName] = tempID));

    this.trackProperties(nodeInstance);
    this.trackPredicatesForFreshNode(nodeInstance);

    return nodeInstance;
  }

  //---- END PUBLIC API

  // Private methods

  /**
   * Given a data class definition and plain object return an instance of the data class.
   */
  private plainToClassExecutor<T extends Object, V>(
    cls: Constructor<T>,
    plain: V[],
    storage: WeakMap<Object, T[]>
  ): T[] {
    // Bail early if already converted.
    if (storage.has(plain)) {
      return storage.get(plain)!;
    }

    // Build the entry class
    const instances: T[] = plainToClass(cls, plain, {
      enableCircularCheck: true,
      strategy: 'exposeAll'
    });

    // Keep reference to the instance so in case of circular we can simply get it from storage and complete the circle.
    storage.set(plain, instances);

    instances.forEach((ins, idx) => {
      this.trackProperties(ins);

      const predicates = MetadataStorage.Instance.predicates.get(ins.constructor.name);
      if (!predicates) {
        return;
      }

      // FIXME: If the same uid is referenced in multiple places in the data, currently we will have 2 different instances
      //   of the same object. We need to make sure we share the instance.
      predicates.forEach(pred => {
        this.trackPredicate(ins, pred);

        const _preds = (plain[idx] as any)[pred.args.name];

        if (_preds) {
          (ins as any)[pred.args.propertyName] = this.plainToClassExecutor(pred.args.type(), _preds, storage);
        }
      });
    });

    return instances;
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
      set(value: any): void {
        if (!value || Array.isArray(value)) {
          value = new PredicateImpl(context.diff, metadata, instance, value || []);
        }

        const facets = MetadataStorage.Instance.facets.get((facet && facet.name) || '') || [];

        // Here we setup facets and clean up the class-transformer artifacts of on the instance.
        value.get().forEach((v: any) => {
          const plain = facets.reduce<IObjectLiteral<any>>((acc, f) => {
            const facetPropertyName = `${name}|${f.args.propertyName}`;

            // Move data to facet object and remove it from the node object.
            acc[f.args.propertyName] = v[facetPropertyName];
            delete v[facetPropertyName];

            return acc;
          }, {} as IObjectLiteral<any>);

          const facetInstance = plainToClass(facet!, plain);
          FacetStorage.attach(propertyName, instance, v, facetInstance);

          // Track each facet property in facet instance and reset it..
          facets.forEach(f => context.diff.facets.trackProperty(facetInstance, f.args.propertyName));
          context.diff.facets.purgeInstance(facetInstance);

          // Clean up the diff on the instance.
          context.diff.properties.purgeInstance(v);
        });

        storedValue = value;
      }
    });
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
   * Initialize a fresh node object
   */
  nodeFor<N extends Object>(nodeCls: Constructor<N>): N;

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

  readonly deletes: IterableWeakMap<IPredicate<any, any>, Set<T>>;
  readonly predicates: IterableWeakMap<IPredicate<any, any>, Set<T>>;
}

class DiffEnvelope<T> implements IDiffEnvelope<T> {
  public readonly facets = new DiffTracker();
  public readonly properties = new DiffTracker();

  public readonly deletes = new IterableWeakMap<IPredicate<any, any>, Set<T>>();
  public readonly predicates = new IterableWeakMap<IPredicate<any, any>, Set<T>>();
}
