import { MetadataStorage } from '../metadata/storage';
import { DiffTracker } from '../mutation/tracker';

/**
 * Facet decorator to annotate a facet definition class.
 */
export function Facet(options: Facet.IOptions = {}): PropertyDecorator {
  return function(target: Object, propertyKey: string): void {
    // Track diff values on the facet.
    DiffTracker.trackProperty(target, propertyKey);

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
    [key: string]: any;
  }
}
