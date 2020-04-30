import { IObjectLiteral } from '../utils/type';

export class DiffTracker {
  /**
   * All instances tracked by the tracker.
   */
  private readonly _instances = new WeakMap<Object, IObjectLiteral<DiffValue<any>>>();

  // Reference to the maintained instances.
  //  This is totally against the idea of using the
  //  weak map in the first place but is easier to add iterator this way.
  //  we can remove this in favor of an IterableWeakMap when time comes.
  private readonly _instancesSet = new Set<Object>();

  /**
   * Register an instance for tracking.
   *
   * ### NOTE
   * Attaching a tracker on a property will make that property enumerable.
   */
  public trackProperty(target: Object, propertyName: string, diffKey?: string): Object {
    const initialValue = Reflect.get(target, propertyName);
    if (initialValue !== undefined) {
      this.ensureInstance(target, propertyName, diffKey || propertyName);
      this._instances.get(target)![propertyName].set(initialValue);
    }

    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const tracker = this;

    Reflect.defineProperty(target, propertyName, {
      configurable: true,
      enumerable: true,
      set: function(value: any) {
        tracker.ensureInstance(target, propertyName, diffKey || propertyName);
        tracker._instances.get(target)![propertyName].set(value);
      },
      get: function() {
        tracker.ensureInstance(target, propertyName, diffKey || propertyName);
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
   * Get an iterable of all tracked objects.
   */
  public getInstancesIterable(): IterableIterator<Object> {
    return this._instancesSet.values();
  }

  /**
   * Make sure the instance is in the weakmap.
   */
  private ensureInstance(instance: Object, propertyName: string, diffKey: string): void {
    if (!this._instances.has(instance)) {
      this._instances.set(instance, {});
      this._instancesSet.add(instance);
    }

    if (!this._instances.get(instance)![propertyName]) {
      this._instances.get(instance)![propertyName] = new DiffValue(diffKey);
    }
  }
}

/**
 * Book of history for a properties changelogs.
 */
export class DiffValue<T> {
  private _value: T | undefined;
  private _dirty = false;

  constructor(readonly key: string) {
    //
  }

  get dirty(): boolean {
    return this._dirty;
  }

  clear(): void {
    this._dirty = false;
  }

  set(value: T): void {
    this._dirty = true;
    this._value = value;
  }

  get(): T {
    return this._value as T;
  }
}
