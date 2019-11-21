import { plainToClass } from 'class-transformer';

import { ObjectLiteral } from '../utils/type';
import { Constructor } from '../utils/class';
import { DiffTracker } from '../mutation/tracker';

export namespace ObjectMapper {
  class ObjectMapperBuilder<T = any> {
    private _entryType: Constructor<T>;
    private _jsonData: ObjectLiteral<any>;

    addEntryType(type: Constructor<T>) {
      this._entryType = type;
      return this;
    }

    addJsonData(data: ObjectLiteral<any> | ObjectLiteral<any>[]) {
      this._jsonData = data;
      return this;
    }

    build(): T[] {
      const instance: T | T[] = plainToClass(this._entryType as any, this._jsonData);
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
