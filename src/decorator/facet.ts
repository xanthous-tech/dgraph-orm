import { MetadataStorage } from '../metadata/storage';
import {DiffTracker} from "../mutation/tracker";

/**
 * Facet decorator to annotate a facet property on a node.
 */
export function Facet(): PropertyDecorator {
  return function(target: Object, propertyName: string): void {

    // Attach a diff tracker to the property.
    DiffTracker.trackProperty(target, propertyName, 'facet');

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
