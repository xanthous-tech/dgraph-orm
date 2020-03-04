import { Constructor } from '../utils/class';
import { IObjectLiteral } from '../utils/type';
import { ITransaction, Transaction } from './transaction';

/**
 * Initializes a transaction.
 *
 * @category PublicAPI
 */
export namespace TransactionBuilder {
  /**
   * Initialize a transaction using an entry type. Used for creating a transaction from an existing
   * graph data.
   */
  export function of<T>(entryType: Constructor<T>): TreeMapperBuilder<T> {
    return new TreeMapperBuilder(entryType);
  }

  /**
   * Initialize an empty transaction.
   */
  export function build(): ITransaction<any> {
    return new Transaction<any, null>();
  }

  class TreeMapperBuilder<T = any> {
    private readonly _entryType: Constructor<T>;
    private _root: IObjectLiteral<any>[];
    private _resource = new Map<string, IObjectLiteral<any>>();

    constructor(type: Constructor<T>) {
      this._entryType = type;
    }

    setRoot(data: IObjectLiteral<any> | IObjectLiteral<any>[]): TreeMapperBuilder<T> {
      if (!Array.isArray(data) && Private.isNode(data)) {
        this._root = [data];
      } else {
        if (Private.isAllNodes(data as IObjectLiteral<any>[])) {
          this._root = data as IObjectLiteral<any>[];
        }
      }

      return this;
    }

    /**
     * Walk the resource graph and add all nodes into resource cache by its `uid`.
     */
    addJsonData(data: IObjectLiteral<any> | IObjectLiteral<any>[]): TreeMapperBuilder<T> {
      if (data && !(data instanceof Array) && data.uid) {
        const { obj, predicates } = Private.separatePredicates(data);

        if (this._resource.has(obj.uid)) {
          const existingObj = this._resource.get(obj.uid) as IObjectLiteral<any>;
          // trying to not modify existing object ref
          Object.assign(existingObj, obj);
        } else {
          this._resource.set(obj.uid, obj);
        }

        for (const key of predicates.keys()) {
          const predicate = predicates.get(key) as IObjectLiteral<any>[];
          // store nodes from the predicate
          this.addJsonData(predicate);
          const existingObj = this._resource.get(obj.uid) as IObjectLiteral<any>;
          const pred = existingObj[key] as IObjectLiteral<any>[];

          predicate.forEach(p => {
            const pObj = this._resource.get(p.uid) as IObjectLiteral<any>;

            if (pred.indexOf(pObj) > -1) {
              return;
            }

            pred.push(pObj);
          });
        }

        return this;
      }

      data.forEach((d: any) => {
        this.addJsonData(d);
      });

      return this;
    }

    build(): ITransaction<T> {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      // const util = require('util');
      // console.log(
      //   util.inspect(
      //     this._root.map(o => this._resource.get(o.uid)),
      //     { colors: true, depth: 20 }
      //   )
      // );

      return new Transaction(
        this._entryType,
        this._root.map(o => this._resource.get(o.uid))
      );
    }
  }
}

/**
 * Module private statics
 */
namespace Private {
  export function separatePredicates(
    obj: IObjectLiteral<any>
  ): { obj: IObjectLiteral<any>; predicates: Map<string, IObjectLiteral<any>[]> } {
    const predicates: Map<string, IObjectLiteral<any>[]> = new Map();

    Object.keys(obj).forEach((key: string) => {
      if (isPredicate(obj, key)) {
        predicates.set(key, obj[key]);

        obj[key] = [];
      }
    });

    return { obj, predicates };
  }

  export function isPredicate(obj: IObjectLiteral<any>, key: string): boolean {
    return isAllNodes(obj[key]);
  }

  export function isAllNodes(obj: IObjectLiteral<any>[]): boolean {
    return Array.isArray(obj) && (obj as Array<any>).every(isNode);
  }

  export function isNode(obj: IObjectLiteral<any>): boolean {
    return !!obj.uid;
  }
}
