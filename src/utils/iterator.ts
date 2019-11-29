/**
 * Namespace for iterator utilities.
 */
export namespace Iterators {
  export function forEach<T>(iterator: IterableIterator<T>, fn: (item: T, idx?: number) => void) {
    let idx = 0;
    for (let i of iterator) {
      fn(i, idx);
      idx++;
    }
  }

  export function reduce<T, U = any>(iterator: IterableIterator<U>, fn: (acc: T, item: U, idx?: number) => T, initial?: T) {
    let idx = 0;
    let acc = initial;
    for (let i of iterator) {
      acc = fn(acc as any as T, i, idx);
    }

    return acc;
  }
}
