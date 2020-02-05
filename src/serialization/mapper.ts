import { plainToClass } from 'class-transformer';
import { IObjectLiteral } from '../utils/type';
import { Constructor } from '../utils/class';
import { DiffTracker } from '../mutation/tracker';
import { MetadataStorage } from '../metadata/storage';

export namespace ObjectMapper {
  class ObjectMapperBuilder<T = any> {
    private _entryType: Constructor<T>;
    private _jsonData: IObjectLiteral<any>[];
    private _resource = new Map<string, IObjectLiteral<any>>();

    addEntryType(type: Constructor<T>): ObjectMapperBuilder<T> {
      this._entryType = type;
      return this;
    }

    addJsonData(data: IObjectLiteral<any> | IObjectLiteral<any>[]): ObjectMapperBuilder<T> {
      this._jsonData = Array.isArray(data) ? data : [data];
      return this;
    }

    /**
     * Walk the resource graph and add all nodes into resource cache by its `uid`.
     */
    addResourceData(data: IObjectLiteral<any> | IObjectLiteral<any>[]): ObjectMapperBuilder<T> {
      if (data && !(data instanceof Array) && data.uid) {
        this._resource.set(data.uid, data);
        return this;
      }

      data.forEach((d: any) => {
        this.addResourceData(d);
      });

      return this;
    }

    build(): T[] {
      // Do not traverse the json tree if there is no
      // resource data.
      if (this._resource.size > 0) {
        const visited = new Set<string>();
        Array.isArray(this._jsonData)
          ? this._jsonData.map(jd => Private.expand(visited, this._resource, jd))
          : Private.expand(visited, this._resource, this._jsonData);
      }

      if (!Array.isArray(this._jsonData)) {
        this._jsonData = [this._jsonData];
      }

      const instances = Private.transform(this._entryType, this._jsonData);
      instances.forEach(i => DiffTracker.purgeInstance(i));
      return instances;
    }
  }

  export function newBuilder<T = any>(): ObjectMapperBuilder<T> {
    return new ObjectMapperBuilder<T>();
  }
}

/**
 * Module private statics.
 */
namespace Private {
  /**
   *  Transform helper with circular handling.
   */
  export function transform<T extends Object, V>(cls: Constructor<T>, plain: V[]): T[] {
    const instanceStorage = new WeakMap();
    return plainToClassExecutor(cls, plain, instanceStorage);
  }

  /**
   * Given a data class definition and plain object return an instance of the data class.
   */
  function plainToClassExecutor<T extends Object, V>(
    cls: Constructor<T>,
    plain: V[],
    storage: WeakMap<Object, T[]>
  ): T[] {
    // Bail early if already converted.
    if (storage.has(plain)) {
      return storage.get(plain)!;
    }

    const instances: T[] = plainToClass(cls, plain, {
      enableCircularCheck: true,
      strategy: 'exposeAll'
    });

    // Keep reference to the instance so in case of circular we can simply get it from storage and complete the circle.
    storage.set(plain, instances);

    instances.forEach((ins, idx) => {
      const predicates = MetadataStorage.Instance.predicates.get(ins.constructor.name);
      if (!predicates) {
        return;
      }

      // FIXME: If the same uid is referenced in multiple places in the data, currently we will have 2 different instances
      //   of the same object. We need to make sure we share the instance.
      predicates.forEach(pred => {
        const _preds = (plain[idx] as any)[pred.args.name];

        if (_preds) {
          (ins as any)[pred.args.propertyName] = plainToClassExecutor(pred.args.type(), _preds, storage);
        }
      });
    });

    return instances;
  }

  /**
   * Visit all nodes in a tree recursively, matching node uid in the resource data and adding extra information.
   *
   * ### NOTE
   * Expand will modify the data in-place.
   */
  export function expand(visited: Set<string>, resource: IObjectLiteral<any>, source: IObjectLiteral<any>): void {
    if (resource.has(source.uid)) {
      Object.assign(source, resource.get(source.uid));
    }

    Object.keys(source).forEach(key => {
      if (key === 'dgraph.type') {
        return;
      }

      if (!Array.isArray(source[key])) {
        return;
      }

      source[key].forEach((node: any) => {
        const visitingKey = `${source.uid}:${key}:${node.uid}`;
        if (visited.has(visitingKey)) {
          return;
        }

        visited.add(visitingKey);
        return expand(visited, resource, node);
      });
    });
  }
}
