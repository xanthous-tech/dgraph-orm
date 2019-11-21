import { ObjectLiteral } from '../utils/type';
import { DiffValue } from './value';

export namespace DiffTracker {
  /**
   * All instances tracked by the tracker.
   */
  const instances = new WeakMap<Object, ObjectLiteral<DiffValue<any>>>();

  /**
   * Register an instance for tracking.
   */
  export function trackProperty(target: Object, propertyName: string, type: 'property' | 'facet', diffKey?: string): Object {
    Reflect.defineProperty(target, propertyName, {
      configurable: true,
      enumerable: true,
      set: function(value: any) {
        ensureInstance(this, propertyName, diffKey || propertyName, type);
        instances.get(this)![propertyName].set(value);
      },
      get: function() {
        ensureInstance(this, propertyName, diffKey || propertyName, type);
        return instances.get(this)![propertyName].get();
      }
    });

    return target;
  }

  /**
   * Purge all changelogs of an instance.
   */
  export function purgeInstance(target: Object) {
    const envelope = instances.get(target);
    if (!envelope) {
      return;
    }

    for (let value of Object.values(envelope)) {
      value.clear();
    }
  }

  /**
   * Get set values. When a property set to a new value, it becomes a set change.
   */
  export function getSets(target: Object): DiffValue<any>[] {
    const t = instances.get(target);
    if (!t) {
      return [];
    }

    return Object.keys(t).reduce<DiffValue<any>[]>((acc, k) => {
      if (t[k].dirty) {
        acc.push(t[k]);
        return acc;
      }

      return acc;
    }, []);
  }

  /**
   * Get set values. When a property set to undefined, it becomes a delete change.
   */
  export function getDeletes(target: Object): DiffValue<any>[] {
    const t = instances.get(target);
    if (!t) {
      return [];
    }

    return Object.keys(t).reduce<DiffValue<any>[]>((acc, k) => {
      if (t[k].dirty && t[k].get() === undefined) {
        acc.push(t[k]);
        return acc;
      }

      return acc;
    }, []);
  }

  /**
   * Make sure the instance is in the weakmap
   */
  function ensureInstance(instance: Object, propertyName: string, diffKey: string, type: 'property' | 'facet'): void {
    if (!instances.has(instance)) {
      instances.set(instance, {});
    }

    if (!instances.get(instance)![propertyName]) {
      instances.get(instance)![propertyName] = new DiffValue(diffKey, type);
    }
  }
}
