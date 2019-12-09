import { plainToClass } from 'class-transformer';
import { ObjectLiteral } from '../utils/type';
import { Constructor } from '../utils/class';
import { DiffTracker } from '../mutation/tracker';
import { MetadataStorage } from '../metadata/storage';
import { CircularTracker } from '../utils/circular-tracker';

export namespace ObjectMapper {
  class ObjectMapperBuilder<T = any> {
    private _entryType: Constructor<T>;
    private _jsonData: ObjectLiteral<any>[];
    private _resource = new Map<string, ObjectLiteral<any>>();

    addEntryType(type: Constructor<T>) {
      this._entryType = type;
      return this;
    }

    addJsonData(data: ObjectLiteral<any> | ObjectLiteral<any>[]) {
      this._jsonData = Array.isArray(data) ? data : [data];
      return this;
    }

    /**
     * Walk the resource graph and add all nodes into resource cache by its `uid`.
     */
    addResourceData(data: ObjectLiteral<any> | ObjectLiteral<any>[]) {
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

  export function newBuilder<T = any>() {
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
    const tracker = new CircularTracker();
    return plainToClassExecutor(cls, plain, tracker, instanceStorage);
  }

  /**
   * Given a data class definition and plain object return an instance of the data class.
   */
  function plainToClassExecutor<T extends Object, V>(cls: Constructor<T>, plain: V[], tracker: CircularTracker, storage: WeakMap<Object, T[]>): T[] {
    const instances: T[] = plainToClass(cls, plain, {
      enableCircularCheck: true,
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
        const current = plain[idx];
        const _preds = (plain[idx] as any)[pred.args.name];

        if (_preds && !tracker.isVisited(current, _preds)) {
          // Mark the edge on plain data.
          if (!tracker.isVisited(current, _preds)) {
            // console.log('VISIT \n', current, '\n', _preds);
            tracker.markVisited(plain[idx], (plain[idx] as any)[pred.args.name]);
          }

          (ins as any)[pred.args.propertyName] =
            plainToClassExecutor(pred.args.type(), _preds, tracker, storage);
        }

        if (_preds && tracker.isVisited(current, _preds)) {
          (ins as any)[pred.args.propertyName] = storage.get(_preds);
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
  export function expand(visited: Set<string>, resource: ObjectLiteral<any>, source: ObjectLiteral<any>) {
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
