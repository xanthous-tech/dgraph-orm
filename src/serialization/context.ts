import { Quad } from 'n3';
import { plainToClass } from 'class-transformer';

import { Constructor } from '../utils/class';
import { MetadataStorage } from '../metadata/storage';
import { DiffTracker } from './tracker';
import { PredicateMetadata } from '../metadata/predicate';
import { IPredicate, MutationBuilder } from '..';
import { PredicateImpl } from '../utils/predicate-impl';
import { IObjectLiteral } from '../utils/type';
import { FacetStorage } from '../facet';
import { ISetMutation } from './builder';

/**
 * Create an environment for a mapped tree.
 */
export class Context {
  readonly diffTracker = new DiffTracker();
  readonly mutationBuilder = new MutationBuilder(this);

  /**
   *  Transform helper with circular handling.
   */
  public transform<T extends Object, V>(entryCls: Constructor<T>, plain: V[]): Context.IEnvelope<T> {
    const instanceStorage = new WeakMap();
    return {
      tree: this.plainToClassExecutor(entryCls, plain, instanceStorage),
      getDeleteNQuads: () => {
        throw new Error('Not implemented');
      },
      getSetNQuadsString: (target: T) => {
        return this.mutationBuilder.getSetNQuadsString(target);
      },
      getSetNQuads: (target: T) => {
        return this.mutationBuilder.getSetNQuads(target);
      }
    };
  }

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
      this.diffTracker.trackProperty(instance, propertyName, name);
    });

    return;
  }

  private trackPredicate<T extends Object, V>(instance: T, metadata: PredicateMetadata): void {
    const { propertyName, facet, name } = metadata.args;

    // Value envelope to store values of the decorated property.
    let storedValue: IPredicate<any, any>;

    const context = this; // If don't re-assign `this` will refer to a wrong variable.
    Object.defineProperty(instance, propertyName, {
      enumerable: true,
      configurable: true,

      get(): any {
        if (!storedValue) {
          storedValue = new PredicateImpl(propertyName, instance, []);
        }

        return storedValue;
      },
      set(value: any): void {
        if (!value || Array.isArray(value)) {
          value = new PredicateImpl(propertyName, instance, value || []);
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
          facets.forEach(f => context.diffTracker.trackProperty(facetInstance, f.args.propertyName));
          context.diffTracker.purgeInstance(facetInstance);

          // Clean up the diff on the instance.
          context.diffTracker.purgeInstance(v);
        });

        storedValue = value;
      }
    });
  }
}

export namespace Context {
  export interface IEnvelope<T> {
    tree: T[];
    getSetNQuads: (target: T) => ISetMutation<Quad[]>;
    getSetNQuadsString: (target: T) => ISetMutation<String>;
    getDeleteNQuads: () => string;
  }
}
