import { DiffTracker } from '../mutation/tracker';
import { MetadataStorage } from '../metadata/storage';
import { Constructor } from '../utils/class';

/**
 * A decorator to attach facet metadata to a node property.
 */
export function WithFacet(facetClz: Constructor): PropertyDecorator {
  return function(target: Object, propertyName: string) {
    // Attach a diff tracker to the property.
    DiffTracker.trackProperty(target, propertyName, 'facet');

    MetadataStorage.Instance.addWithFacetMetadata({
      target,
      propertyName,
      constructor: facetClz,
    });
  };
}
