/**
 * Global statics for tracking facet values attach on node pairs.
 */
export namespace FacetStorage {
  type WNode = Object;
  type VNode = Object;

  type FacetValue<T extends Object> = WeakMap<T, any>;
  type FacetsNamespace<T> = Map<string, T>;

  /**
   * Data structure for storing namespaced facets between two object instances.
   */
  const _storage = new WeakMap<VNode, FacetsNamespace<FacetValue<WNode>>>();

  /**
   * Attach a facet value on a connection.
   */
  export function attach(namespace: string, v: VNode, w: WNode, value: any): void {
    if (!_storage.has(v)) {
      const ns = new Map<string, FacetValue<WNode>>();
      _storage.set(v, ns);
    }

    if (!_storage.get(v)!.has(namespace)) {
      _storage.get(v)!.set(namespace, new WeakMap<Object, any>());
    }

    _storage
      .get(v)!
      .get(namespace)!
      .set(w, value);
  }

  /**
   * Detach a facet value from a connection.
   */
  export function detach(namespace: string, v: Object, w: Object): void {
    if (!_storage.has(v)) {
      return;
    }

    if (!_storage.get(v)!.has(namespace)) {
      return;
    }

    _storage
      .get(v)!
      .get(namespace)!
      .delete(w);
  }

  /**
   * Get a facet value.
   */
  export function get(namespace: string, v: Object, w: Object): any | undefined {
    if (!_storage.has(v)) {
      return;
    }

    if (!_storage.get(v)!.has(namespace)) {
      return;
    }

    return _storage
      .get(v)!
      .get(namespace)!
      .get(w);
  }
}
