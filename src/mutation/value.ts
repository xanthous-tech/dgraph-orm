/**
 * Book of history for a properties changelogs.
 */
export class DiffValue<T> {
  private _value: T | undefined;
  private _dirty = false;

  constructor(readonly key: string) {
    //
  }

  get dirty() {
    return this._dirty;
  }

  clear() {
    this._dirty = false;
  }

  set(value: T) {
    this._dirty = true;
    this._value = value;
  }

  get(): T {
    return this._value as T;
  }
}
