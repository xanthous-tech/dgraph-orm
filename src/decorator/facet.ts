import { MetadataStorage } from '../metadata/storage';

/**
 * Facet decorator to annotate a facet property on a node.
 */
export function Facet(): PropertyDecorator {
  return function(target: Object, propertyName: string): void {
    MetadataStorage.Instance.addFacetMetadata({
      target,
      propertyName
    });
  };
}

export namespace Facet {
  /**
   * Facet decorator options.
   */
  export interface IOptions {
    prefix?: string;
  }
}
