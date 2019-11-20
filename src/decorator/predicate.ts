import { Expose, Transform, Type } from 'class-transformer';

import { MetadataStorage } from '../metadata/storage';
import { Constructor } from '../utils/class';
import {DiffTracker} from "../diffing/tracker";

/**
 * A decorator to annotate properties on a DGraph Node class. Only the properties
 * decorated with this decorator will be treated as a node property.
 */
export function Predicate(options: Predicate.IOptions = {}) {
  return function(target: Object, propertyName: string): void {
    const isArray = Array.isArray(options.type);
    const type = Private.sanitizePredicateType(options, target, propertyName);
    if (!type) {
      throw new Error(
        `Cannot infer the type for property '${propertyName}' on node '${target.constructor.name}'. ` +
          'Please try to explicitly define a type in the property options'
      );
    }

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
    Type(() => type as Function)(target, propertyName);

    // Here we register a transformer on the predicate decorator for each facet defined on the predicate.
    // This will allow us to transform child properties facet values on runtime.
    //
    // TODO: We need to check if we can do this more performant way.
    //  Currently, this is adding O(n x m) complexity to the predicate field where n is number of facets
    //  and m is number of properties.
    Transform((value: any[]) => {
      const facet = MetadataStorage.Instance.facets.get((type as Function).name);
      value &&
        value.forEach(v => {
          facet &&
            facet.forEach(f => {
              const facetPropertyName = `${name}|${f.args.propertyName}`;
              v[f.args.propertyName] = v[facetPropertyName];
              delete v[facetPropertyName];

              // Purge all of the changelogs to clear out any change log created by the
              // class transformer.
              DiffTracker.purgeInstance(v);
            });
        });

      return value;
    })(target, propertyName);

    MetadataStorage.Instance.addPredicateMetadata({
      type,
      isArray,
      name,
      target,
      propertyName
    });
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
    type?: Constructor | Constructor[];

    /**
     * Name of the predicate that is created in DGraph. Setting name
     * property lets user to reuse a global predicate between different nodes.
     */
    name?: string;
  }
}

/**
 * Private module statics.
 */
namespace Private {
  /**
   * Find out the type of the predicate based on user defined type or reflected type
   * and create additional metadata to help building correct serialization/deserialization on
   * nodes.
   */
  export function sanitizePredicateType(options: Predicate.IOptions, target: Object, propertyName: string) {
    let type = options.type;
    if (type && (Array.isArray(type) && type.length !== 1)) {
      throw new Error(`Predicate array type for ${propertyName} must contain exactly one type.`);
    }

    if (Array.isArray(type)) {
      type = type[0];
    }

    const reflected =
      Reflect && Reflect.getMetadata ? Reflect.getMetadata('design:type', target, propertyName) : undefined;

    return type || reflected;
  }
}
