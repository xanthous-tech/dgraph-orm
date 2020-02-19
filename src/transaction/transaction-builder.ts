import { Constructor } from '../utils/class';
import { IObjectLiteral } from '../utils/type';
import { Transaction } from './transaction';

export namespace TransactionBuilder {
  export function of<T>(entryType: Constructor<T>): TreeMapperBuilder<T> {
    return new TreeMapperBuilder().addEntryType(entryType);
  }

  export function build(): Transaction.ITransaction<any> {
    return new Transaction<any, null>();
  }

  class TreeMapperBuilder<T = any> {
    private _entryType: Constructor<T>;
    private _jsonData: IObjectLiteral<any>[];
    private _resource = new Map<string, IObjectLiteral<any>>();

    addEntryType(type: Constructor<T>): TreeMapperBuilder<T> {
      this._entryType = type;
      return this;
    }

    addJsonData(data: IObjectLiteral<any> | IObjectLiteral<any>[]): TreeMapperBuilder<T> {
      this._jsonData = Array.isArray(data) ? data : [data];
      return this;
    }

    /**
     * Walk the resource graph and add all nodes into resource cache by its `uid`.
     */
    addResourceData(data: IObjectLiteral<any> | IObjectLiteral<any>[]): TreeMapperBuilder<T> {
      if (data && !(data instanceof Array) && data.uid) {
        this._resource.set(data.uid, data);
        return this;
      }

      data.forEach((d: any) => {
        this.addResourceData(d);
      });

      return this;
    }

    build(): Transaction.ITransaction<T> {
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

      return new Transaction(this._entryType, this._jsonData);
    }
  }
}

/**
 * Module private statics
 */
namespace Private {
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
