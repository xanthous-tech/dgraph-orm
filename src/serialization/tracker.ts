import { IObjectLiteral } from '../utils/type';
import { DiffValue } from './value';

export class DiffTracker {
  /**
   * All instances tracked by the tracker.
   */
  private readonly _instances = new WeakMap<Object, IObjectLiteral<DiffValue<any>>>();

  /**
   * Register an instance for tracking.
   *
   * ### NOTE
   * Attaching a tracker on a property will make that property enumerable.
   */
  public trackProperty(target: Object, propertyName: string, diffKey?: string): Object {
    this.ensureInstance(target, propertyName, diffKey || propertyName);

    const initialValue = Reflect.get(target, propertyName);
    if (initialValue) {
      this._instances.get(target)![propertyName].set(initialValue);
    }

    const tracker = this;

    Reflect.defineProperty(target, propertyName, {
      configurable: true,
      enumerable: true,
      set: function(value: any) {
        tracker._instances.get(target)![propertyName].set(value);
      },
      get: function() {
        return tracker._instances.get(target)![propertyName].get();
      }
    });

    return target;
  }

  /**
   * Purge all change logs of an instance.
   */
  public purgeInstance(target: Object): void {
    const envelope = this._instances.get(target);
    if (!envelope) {
      return;
    }

    for (const value of Object.values(envelope)) {
      value.clear();
    }
  }

  /**
   * Get all tracked properties of an instance.
   */
  public getTrackedProperties(target: Object): string[] {
    const t = this._instances.get(target);
    if (!t) {
      return [];
    }

    return Object.keys(t);
  }

  /**
   * Get set values. When a property set to a new value, it becomes a set change.
   */
  public getSets(target: Object): DiffValue<any>[] {
    const t = this._instances.get(target);
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
  public getDeletes(target: Object): DiffValue<any>[] {
    const t = this._instances.get(target);
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
   * Make sure the instance is in the weakmap.
   */
  private ensureInstance(instance: Object, propertyName: string, diffKey: string): void {
    if (!this._instances.has(instance)) {
      this._instances.set(instance, {});
    }

    if (!this._instances.get(instance)![propertyName]) {
      this._instances.get(instance)![propertyName] = new DiffValue(diffKey);
    }
  }
}
