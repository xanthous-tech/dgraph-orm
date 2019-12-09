export class CircularTracker {
    private _visited = new WeakMap<Object, WeakMap<Object, boolean>>();

    isVisited(t: Object, p: Object) {
        return this._visited.has(t) && this._visited.get(t)!.get(p);
    }

    markVisited(t: Object, p: Object) {
        if (!this._visited.has(t)) {
            this._visited.set(t, new WeakMap<Object, boolean>());
        }

        this._visited.get(t)!.set(p, true);
    }
}