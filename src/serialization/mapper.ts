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
          if (d.uid) {
            this._resource.set(d.uid, d)
          }
        });
      } else {
        if (data.uid) {
          this._resource.set(data.uid, data)
        }
      }
      return this;
    }

    build(): T[] {
      this.expand(this._jsonData);
      const instance: T | T[] = plainToClass(this._entryType as any, this._jsonData);
      if (Array.isArray(instance)) {
        instance.forEach(i => DiffTracker.purgeInstance(i));
        return instance;
      }

      DiffTracker.purgeInstance(instance);
      return [instance];
    }

    private expand(source: ObjectLiteral) {
      if (this._resource.has(source.uid)) {
        source = {...source, ...this._resource.get((source.uid))}
      }
      Object.keys(source).map(key => {
        if (source[key] instanceof Array) {
          this.expand(source[key])
        }
      });
    }
  }

  export function newBuilder<T = any>() {
    return new ObjectMapperBuilder<T>();
  }
}
