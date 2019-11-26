import { MetadataStorage } from '../metadata/storage';

/**
 * Facet decorator to annotate a facet definition class.
 */
export function Facet(options: Facet.IOptions = {}): PropertyDecorator {
  return function(target: Object, propertyKey: string): void {
    MetadataStorage.Instance.addFacetMetadata({
      target,
      propertyName: propertyKey
    });
  };
}

export namespace Facet {
  /**
   * Facet decorator options.
   */
  export interface IOptions {
    //
  }
}
