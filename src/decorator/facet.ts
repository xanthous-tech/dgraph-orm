/* eslint @typescript-eslint/no-empty-interface: 0 */

import { MetadataStorage } from '../metadata/storage';

/**
 * Facet decorator to annotate a facet definition class.
 *
 * @category PublicAPI
 */
export function Facet(options: Facet.IOptions = {}): PropertyDecorator {
  return function(target: Object, propertyKey: string): void {
    MetadataStorage.Instance.addFacetMetadata({
      target,
      propertyName: propertyKey
    });
  };
}

/**
 * @category PublicAPI
 */
export namespace Facet {
  /**
   * Facet decorator options.
   *
   * placeholder for future usage.
   */
  export interface IOptions {
    //
  }
}
