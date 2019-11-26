import { MetadataStorage } from '../metadata/storage';

/**
 * Facet decorator to annotate a facet definition class.
 */
export function Facet(options: Facet.IOptions = {}): ClassDecorator {
  return function(target: Function): void {
    MetadataStorage.Instance.addFacetMetadata({
      target
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
