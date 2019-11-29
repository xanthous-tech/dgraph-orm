import { DiffTracker } from '../mutation/tracker';
import { MetadataStorage } from '../metadata/storage';
import { Predicate } from '..';

/**
 * Utility namespace.
 */
export namespace Utils {
  /**
   * Convert a node instance to a plain object.
   * Changes made to the plain object will not be tracked by the library.
   */
  export function toObject(instance: Object) {
    let object = Object.assign({}, instance);

    DiffTracker.getTrackedProperties(instance).forEach(a =>
      Object.defineProperty(object, a, {
        enumerable: true,
        value: Reflect.get(instance, a)
      })
    );

    // Drill down to the predicates if metadata found in the storage.
    const predicatesMetadata = MetadataStorage.Instance.predicates.get(instance.constructor.name);
    predicatesMetadata &&
      predicatesMetadata.forEach(p => {
        const predicateNodes: Predicate<any> = Reflect.get(instance, p.args.propertyName);
        if (predicateNodes) {
          if (Array.isArray(predicateNodes.get())) {
            // Convert predicates to plain object.
            Object.defineProperty(object, p.args.propertyName, {
              enumerable: true,
              value: predicateNodes.get().reduce((acc, pn) => acc.concat(acc, [Utils.toObject(pn)]), [])
            });
          }
        }
      });

    return object;
  }
}
