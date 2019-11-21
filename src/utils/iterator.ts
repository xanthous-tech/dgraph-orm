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
}
