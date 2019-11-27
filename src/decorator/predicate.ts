import { Expose, plainToClass, Type } from 'class-transformer';

import { MetadataStorage } from '../metadata/storage';
import { DiffTracker } from '../mutation/tracker';
import { Constructor } from '../utils/class';
import { ObjectLiteral } from '../utils/type';
import { PredicateImpl } from '../utils/predicate-impl';
import { FacetStorage } from '../facet';

/**
 * A decorator to annotate properties on a DGraph Node class. Only the properties
 * decorated with this decorator will be treated as a node property.
 */
export function Predicate(options: Predicate.IOptions) {
  // Value envelope to store values of the decorated property.
  const values = new WeakMap<Object, Predicate<any, any>>();

  return function(target: Object, propertyName: string): void {
    let name = options.name;
    if (!name) {
      name = `${target.constructor.name}.${propertyName}`;
      // When we load data into the class, we will have a new property
      // defined as the auto-generated name, we need to make sure property with predicate
      // decorator returns the correct value.
      Expose({ name, toClassOnly: true })(target, propertyName);
    }

    // Setup class transformer for node type of properties.
    // This will also be threat as a connection edge when building
    // queries.
    Type(options.type)(target, propertyName);

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
        const { name } = MetadataStorage.Instance.predicates
          .get(target.constructor.name)!
          .find(p => p.args.propertyName === propertyName)!.args;

        // Here we setup facets and clean up the class-transformer artifacts of on the instance.
        value.get().forEach((v: any) => {
          if (facets) {
            const plain = facets.reduce<ObjectLiteral<any>>(
              (acc, f) => {
                const facetPropertyName = `${name}|${f.args.propertyName}`;

                // Move data to facet object and remove it from the node object.
                acc[f.args.propertyName] = v[facetPropertyName];
                delete v[facetPropertyName];

                return acc;
              },
              {} as ObjectLiteral<any>
            );

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
      type: options.type,
      // TODO:
      isArray: true,
      name,
      target,
      propertyName
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
  }
}

/**
 * Type definition of the predicate.
 */
export interface Predicate<T, U = void> {
  /**
   * Attach a facet to a node connection.
   */
  withFacet(facet: U): Predicate<T, U>;

  /**
   * Get an attached facet value of a node.
   */
  getFacet(node: T): U | undefined;

  /**
   * Add a new node to the connection.
   */
  add(node: T): Predicate<T, U>;

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
