import { plainToClass } from 'class-transformer';

import { ObjectLiteral } from '../utils/type';
import { Constructor } from '../utils/class';
import { DiffTracker } from '../mutation/tracker';

export namespace ObjectMapper {
  class ObjectMapperBuilder<T = any> {
    private _entryType: Constructor<T>;
    private _jsonData: ObjectLiteral<any> | ObjectLiteral<any>[];
    private _resource = new Map<string, ObjectLiteral<any>>();

    addEntryType(type: Constructor<T>) {
      this._entryType = type;
      return this;
    }

    addJsonData(data: ObjectLiteral<any> | ObjectLiteral<any>[]) {
      this._jsonData = data;
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
      const visited = new Set<string>();

      const expand = (source: ObjectLiteral) => {
        if (this._resource.has(source.uid)) {
          source = { ...source, ...this._resource.get(source.uid) };
        }

        Object.keys(source).forEach(key => {
          if (Array.isArray(source[key])) {
            source[key] = source[key].map((node: any) => {
              const visitingKey = `${source.uid}+${key}+${node.uid}`;

              if (visited.has(visitingKey)) {
                // TODO: Check if this appears in the
                //  data after build.
                return "CIRCULAR_STOP";
              }

              visited.add(visitingKey);
              return expand(node);
            });
          }
        });

        return source;
      };

      // Do not traverse the json tree if there is no
      // resource data.
      let expandedJsonData = null;
      if (this._resource.size > 0) {
        expandedJsonData = Array.isArray(this._jsonData)
          ? this._jsonData.map(jd => expand(jd))
          : expand(this._jsonData);
      }

      const instance: T | T[] = plainToClass(this._entryType as any, expandedJsonData || this._jsonData);

      if (Array.isArray(instance)) {
        instance.forEach(i => DiffTracker.purgeInstance(i));
        return instance;
      }

      DiffTracker.purgeInstance(instance);
      return [instance];
    }
  }

  export function newBuilder<T = any>() {
    return new ObjectMapperBuilder<T>();
  }
}
