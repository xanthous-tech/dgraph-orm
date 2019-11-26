import { Expose, Transform, Type } from 'class-transformer';

import { MetadataStorage } from '../metadata/storage';
import { Constructor } from '../utils/class';
import {FacetStorage} from "../facet";

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

    Transform((value: any[]) => new Private.PredicateImpl(target, value))(target, propertyName);

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
  add(node: T): void;

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

  /**
   * Concrete implementation of the Predicate interface.
   *
   * ### NOTE
   * Node definition overrides the predicate types.
   */
  export class PredicateImpl<T = any, U = any> implements Predicate<T, U> {
    private _facet: U | null = null;

    constructor(private readonly _parent: Object, private readonly _data: T[]) {
      //
    }

    withFacet(facet: U): Predicate<T, U> {
      this._facet = facet;
      return this;
    }

    getFacet(node: T): U | undefined {
      return FacetStorage.get(this._parent, node);
    }

    add(node: T): void {
      if (this._facet) {
        FacetStorage.attach(this._parent, node, this._facet);
        this._facet = null;
      }

      this._data.push(node);
    }

    get(): ReadonlyArray<T> {
      return Object.freeze(this._data);
    }

    remove(node: T): void {
      const index = this._data.findIndex(d => d !== node);
      if (index < 0) {
        return;
      }

      this._data.splice(index, 1);
    }
  }
}
