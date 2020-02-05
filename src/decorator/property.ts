import { Expose } from 'class-transformer';

import { DiffTracker } from '../mutation/tracker';
import { MetadataStorage } from '../metadata/storage';
import { PropertyType, PropertyTypeUtils } from '../types/property';

/**
 * Default type for index created using @Index decorator.
 */
const DEFAULT_INDEX_TYPE = 'string';

/**
 * A decorator to annotate properties to index on.
 */
export function Index(options: Index.IOptions): PropertyDecorator {
  return function(target: Object, propertyName: string): void {
    MetadataStorage.Instance.addIndexMetadata({
      type: (options && options.type) || DEFAULT_INDEX_TYPE,
      target,
      propertyName
    });
  };
}

export namespace Index {
  /**
   * Options for the `Index` decorator.
   */
  export interface IOptions {
    type: string;
  }
}

/**
 * A decorator to annotate properties on a DGraph Node class. Only the properties
 * decorated with this decorator will be treated as a node property.
 */
export function Property(options: Property.IOptions = {}): PropertyDecorator {
  return function(target: Object, propertyName: string): void {
    const { type, isArray } = Private.sanitizePropertyType(options, target, propertyName);
    if (!type || !Private.isPropertyType(type)) {
      throw new Error(
        `Cannot infer the type for property '${propertyName}' on node '${target.constructor.name}'. ` +
          'Please try to explicitly define a type in the property options'
      );
    }

    let name = options.name;
    if (!name) {
      name = `${target.constructor.name}.${propertyName}`;
    }

    // When we load data into the class, we will have a new property
    // defined as the auto-generated name, we need to make sure property with predicate
    // decorator returns the correct value.
    Expose({ name, toClassOnly: true })(target, propertyName);

    // Attach a diff tracker to the property.
    DiffTracker.trackProperty(target, propertyName, name);

    MetadataStorage.Instance.addPropertyMetadata({
      type,
      name,
      isArray,
      target,
      propertyName
    });
  };
}

export namespace Property {
  /**
   * Options for the `PropertyType` decorator.
   */
  export interface IOptions {
    /**
     * Dgraph type of the predicate.
     */
    type?: PropertyType | PropertyType[];

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
  export function isPropertyType(value: PropertyType | any): value is PropertyType {
    return Object.values(PropertyType).includes(value);
  }

  /**
   * Find out the type of the predicate based on user defined type or reflected type
   * and create additional metadata to help building correct serialization/deserialization on
   * nodes.
   */
  export function sanitizePropertyType(
    options: Property.IOptions,
    target: Object,
    propertyName: string
  ): { isArray: boolean; type: PropertyType } {
    let type = options.type;
    let isArray = false;

    if (type && Array.isArray(type)) {
      if (type.length != 1) {
        throw new Error('Type definition array should contain exactly 1 type');
      }

      isArray = true;
      type = type[0];
    }

    // If no type, fallback to reflected type.
    type = type || getPropertyReflectedType(target, propertyName);

    return {
      isArray,
      type
    };
  }

  /**
   * Get reflected type of a predicate property.
   */
  function getPropertyReflectedType(target: Object, propertyName: string): PropertyType {
    const reflected =
      Reflect && Reflect.getMetadata ? Reflect.getMetadata('design:type', target, propertyName) : undefined;

    return PropertyTypeUtils.convertReflectedToPropertyType(reflected.name.toLowerCase());
  }
}
