import {plainToClass} from 'class-transformer';

import {ObjectLiteral} from '../utils/type';
import {Constructor} from '../utils/class';
import {DiffTracker} from '../mutation/tracker';

export namespace ObjectMapper {
  class ObjectMapperBuilder<T = any> {
    private _entryType: Constructor<T>;
    private _jsonData: ObjectLiteral<any>;
    private _resource: Map<string, ObjectLiteral<any>> = new Map<string, ObjectLiteral<any>>();

    addEntryType(type: Constructor<T>) {
      this._entryType = type;
      return this;
    }

    addJsonData(data: ObjectLiteral<any> | ObjectLiteral<any>[]) {
      this._jsonData = data;
      return this;
    }

    addResourceData(data: ObjectLiteral<any> | ObjectLiteral<any>[]) {
      if (data instanceof Array) {
        data.forEach(d => {
          this.addResourceData(d)
        });
      } else {
        if (data.uid) {
          this._resource.set(data.uid, data)
        }
      }
      return this;
    }

    build(): T[] {

      const visited = new Set<string>();
      // const isVisited = (t: Object, p: Object) => visited.has(t) && visited.get(t)!.get(p);


      const expand = (source: ObjectLiteral) => {
        console.log("EXPANDING", source);
        if (this._resource.has(source.uid)) {
          source = {...source, ...this._resource.get((source.uid))}
        }
        Object.keys(source).map(key => {
          if (key === "dgraph.type") {
            return
          }
          if (Array.isArray(source[key])) {
            source[key] = source[key].map((node: any) => {
              // TODO: tag source + key
              const visitingKey = `${source.uid}+${key}+${node.uid}`;
              if (visited.has(visitingKey)){
                return
              }
              visited.add(visitingKey);
              return expand(node)
            })
          }
        });
        return source
      }

      const expandedData = expand(this._jsonData);
      const instance: T | T[] = plainToClass(this._entryType as any, expandedData);
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
