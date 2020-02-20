/**
 * Namespace for iterator utilities.
 */
export namespace Iterators {
  export function forEach<T>(iterator: IterableIterator<T>, fn: (item: T, idx?: number) => void): void {
    let idx = 0;
    for (const i of iterator) {
      fn(i, idx);
      idx++;
    }
  }

  export function reduce<T, U = any>(
    iterator: IterableIterator<U>,
    fn: (acc: T, item: U, idx?: number) => T,
    initial?: T
  ): T | undefined {
    let idx = 0;
    let acc = initial;
    for (const i of iterator) {
      acc = fn((acc as any) as T, i, idx);
      idx++;
    }

    return acc;
  }
}

/**
 * TODO: Replace with a real IterableWeakMap when TC proposal goes prod.
 */
export class IterableWeakMap<T extends Object, V = any> extends WeakMap<T, V> {
  private _keys = new Set<T>();

  set(key: T, value: V): this {
    this._keys.add(key);
    return super.set(key, value);
  }

  get(key: T): V | undefined {
    return super.get(key);
  }

  delete(key: T): boolean {
    this._keys.delete(key);
    return super.delete(key);
  }

  /**
   * Dispose of the iterable.
   */
  dispose() {
    this._keys.clear();
  }

  get iterable(): IterableIterator<T> {
    return this._keys.values();
  }
}
