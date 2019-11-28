import { DiffTracker } from '../mutation/tracker';

/**
 * Utility namespace.
 */
export namespace Utils {
  /**
   * Convert a node instance to a plain object.
   */
  export function toObject(instance: Object) {
    return DiffTracker.getTrackedProperties(instance).reduce((prev, a) => {
      prev[a] = Reflect.get(instance, a);
      return prev;
    }, Object.create(null));
  }
}
