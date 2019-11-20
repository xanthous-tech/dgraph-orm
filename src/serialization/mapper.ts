import { plainToClass } from 'class-transformer';

import { ObjectLiteral } from '../utils/type';
import { Constructor } from '../utils/class';

export namespace ObjectMapper {
  class ObjectMapperBuilder<T = Constructor> {
    private _entryType: T;
    private _jsonData: ObjectLiteral<any>;

    addEntryType(type: T) {
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
        return instance;
      }

      return [instance];
    }
  }

  export function newBuilder() {
    return new ObjectMapperBuilder();
  }
}
