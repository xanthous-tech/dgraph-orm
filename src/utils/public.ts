import * as util from 'util';

import { IPredicate } from '../decorator/predicate';
import { DiffTracker } from '../mutation/tracker';
import { MetadataStorage } from '../metadata/storage';
import { CircularTracker } from './circular-tracker';

/**
 * Utility namespace.
 */
export namespace Utils {
  export interface IPrintOptions {
    depth?: number;
  }

  /**
   * Print the tree as object using util inspect.
   */
  export function printObject(instance: Object, options: IPrintOptions = {}): void {
    const inspection = util.inspect(toObject(instance), {
      colors: true,
      compact: false,
      depth: options.depth || 10
    });

    console.log(inspection);
  }

  /**
   * Convert a node instance to a plain object.
   * Changes made to the plain object will not be tracked by the library.
   */
  export function toObject(instance: Object): any {
    return _toObject(instance, new CircularTracker(), new WeakMap());
  }

  function _toObject(instance: Object, tracker: CircularTracker, storage: WeakMap<Object, Object>): any {
    const object = Object.assign({}, instance);
    if (!storage.has(instance)) {
      storage.set(instance, object);
    }

    DiffTracker.getTrackedProperties(instance).forEach(a => {
      Object.defineProperty(object, a, {
        enumerable: true,
        value: Reflect.get(instance, a)
      });
    });

    // Drill down to the predicates if metadata found in the storage.
    const predicatesMetadata = MetadataStorage.Instance.predicates.get(instance.constructor.name) || [];
    predicatesMetadata.forEach(p => {
      const predicateNodes: IPredicate<any> = Reflect.get(instance, p.args.propertyName);

      if (predicateNodes && Array.isArray(predicateNodes.get()) && !tracker.isVisited(instance, predicateNodes)) {
        tracker.markVisited(instance, predicateNodes);

        // Convert predicates to plain object.
        Object.defineProperty(object, p.args.propertyName, {
          enumerable: true,
          value: predicateNodes.get().reduce((acc, pn) => {
            acc.push(storage.get(pn) || _toObject(pn, tracker, storage));
            return acc;
          }, [])
        });
      }
    });

    return object;
  }
}
