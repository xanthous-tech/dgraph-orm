import { plainToClass, Exclude } from 'class-transformer';

import { MetadataStorage } from '../metadata/storage';
import { DiffTracker } from '../mutation/tracker';
import { Constructor } from '../utils/class';
import { IObjectLiteral } from '../utils/type';
import { PredicateImpl } from '../utils/predicate-impl';
import { FacetStorage } from '../facet';

/**
 * A decorator to annotate properties on a DGraph Node class. Only the properties
 * decorated with this decorator will be treated as a node property.
 */
export function Predicate(options: Predicate.IOptions): PropertyDecorator {
  // Value envelope to store values of the decorated property.
  const values = new WeakMap<Object, IPredicate<any, any>>();

  return function(target: Object, propertyName: string): void {
    let name = options.name;
    if (!name) {
      name = `${target.constructor.name}.${propertyName}`;
    }

    // Exclude the predicates to prevent class-transformer from doing unnecessary stuff..
    Exclude()(target, name);

    // We define get/set on the class so we can access to the class instances.
    // this will also handle wrapping raw data into predicate type.
    Object.defineProperty(target, propertyName, {
      enumerable: true,
      configurable: true,

      get(): any {
        if (!values.get(this)) {
          values.set(this, new PredicateImpl(propertyName, this, []));
        }
        return values.get(this)!;
      },
      set(value: any): void {
        if (!value || Array.isArray(value)) {
          value = new PredicateImpl(propertyName, this, value || []);
        }

        const facets = MetadataStorage.Instance.facets.get((options.facet && options.facet.name) || '') || [];

        // Here we setup facets and clean up the class-transformer artifacts of on the instance.
        value.get().forEach((v: any) => {
          if (facets) {
            const plain = facets.reduce<IObjectLiteral<any>>((acc, f) => {
              const facetPropertyName = `${name}|${f.args.propertyName}`;

              // Move data to facet object and remove it from the node object.
              acc[f.args.propertyName] = v[facetPropertyName];
              delete v[facetPropertyName];

              return acc;
            }, {} as IObjectLiteral<any>);

            const instance = plainToClass(options.facet!, plain);
            FacetStorage.attach(propertyName, this, v, instance);
            DiffTracker.purgeInstance(instance);
          }

          // Clean up the diff on the instance.
          DiffTracker.purgeInstance(v);
        });

        values.set(this, value);
      }
    });

    MetadataStorage.Instance.addPredicateMetadata({
      count: options.count !== undefined ? options.count : true,
      type: options.type,
      name,
      target,
      propertyName,
      // TODO:
      isArray: true
    });

    if (options.facet) {
      MetadataStorage.Instance.addWithFacetMetadata({
        target,
        propertyName,
        constructor: options.facet
      });
    }
  };
}

export namespace Predicate {
  /**
   * Options for the `Predicate` decorator.
   */
  export interface IOptions {
    /**
     * Dgraph type of the predicate.
     */
    type: () => Constructor;

    /**
     * Name of the predicate that is created in DGraph. Setting name
     * property lets user to reuse a global predicate between different nodes.
     */
    name?: string;

    /**
     * Facet definition to attach to the connection.
     */
    facet?: Constructor<any>;

    /**
     * Should dgraph count the number of edges out of each node.
     */
    count?: boolean;
  }
}

/**
 * Type definition of the predicate.
 */
export interface IPredicate<T, U = void> {
  /**
   * Attach a facet to a node connection.
   *
   * ## Note
   * Facet value must be a concrete instance of the facet definition.
   * While it is possible to satisfy to type using a plain object,
   * it breaks the behaviour of the mapper.
   */
  withFacet(facet: U | null): IPredicate<T, U>;

  /**
   * Get an attached facet value of a node.
   */
  getFacet(node: T): U | undefined;

  /**
   * Add a new node to the connection.
   */
  add(node: T): IPredicate<T, U>;

  /**
   * Used for updating a facet on a predicate connection.
   * If the connection does not already exist, use `add` instead.
   * @example
   *
   * ```
   *    // Add a new facet to existing connection.
   *    parent.withFacet(new MyFacet(42)).update(child);
   *
   *    // Remove a facet from a connection.
   *    parent.withFacet(null).update(child);
   * ```
   */
  update(node: T): IPredicate<T, U>;

  /**
   * Get all nodes on the connection.
   */
  get(): ReadonlyArray<T>;

  /**
   * Tag a node for removal.
   * This will also remove the connection between parent and child.
   */
  remove(node: T): void;
}
