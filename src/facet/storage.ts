/**
 * Global statics for tracking facet values attach on node pairs.
 */
export namespace FacetStorage {
  const _storage = new WeakMap<Object, WeakMap<Object, any>>();

  /**
   * Attach a facet value on a connection.
   */
  export function attach(v: Object, w: Object, value: any): void {
    if (!_storage.has(v)) {
      _storage.set(v, new WeakMap<Object, any>([[w, value]]));
      return;
    }

    _storage.get(v)!.set(w, value);
  }

  /**
   * Detach a facet value from a connection.
   */
  export function detach(v: Object, w: Object): void {
    if (!_storage.has(v)) {
      return;
    }

    if (!_storage.get(v)!.get(w)) {
      return;
    }

    _storage.get(v)!.delete(w);
  }

  /**
   * Get a facet value.
   */
  export function get(v: Object, w: Object): any {
    if (!_storage.has(v)) {
      return;
    }

    if (!_storage.get(v)!.get(w)) {
      return;
    }

    return _storage.get(v)!.get(w);
  }
}
