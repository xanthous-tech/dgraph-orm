import { Constructor } from '../utils/class';
import { IObjectLiteral } from '../utils/type';
import { ITransaction, Transaction } from './transaction';
import { INode } from '../types/data';
import { Iterators } from '../utils/iterator';

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

  /**
   * Tree mapper helps initializing the data. Meaning, it will
   * check all the node, make sure we don't have duplicate nodes in the tree,
   * if we have it will use references to refer to same node in different occurrences.
   *
   * DGraph clients return predicates as arrays, tree mapper will convert them to Sets instead.
   * since we don't want the duplicates, Sets are more efficient compare to arrays. Then plain
   * predicates data attached to nodes will circulate as sets.
   */
  class TreeMapperBuilder<T = any> {
    private readonly _entryType: Constructor<T>;
    private _root: Set<INode>;
    private _resource = new Map<string, INode>();

    constructor(type: Constructor<T>) {
      this._entryType = type;
    }

    setRoot(data: IObjectLiteral<any> | IObjectLiteral<any>[]): TreeMapperBuilder<T> {
      if (!Array.isArray(data) && Private.isNode(data)) {
        this._root = new Set([data]);
      }

      if (Array.isArray(data) && Private.isAllNodes(data)) {
        this._root = new Set(data);
      }

      this.addJsonData(data);
      return this;
    }

    /**
     * Walk the resource graph and add all nodes into resource cache by its `uid`.
     */
    addJsonData(data: IObjectLiteral<any> | IObjectLiteral<any>[]): TreeMapperBuilder<T> {
      if (data && !(data instanceof Array) && Private.isNode(data)) {
        const { obj, predicates } = Private.separatePredicates(data);

        if (this._resource.has(obj.uid)) {
          const existingObj = this._resource.get(obj.uid);
          // trying to not modify existing object ref
          Object.assign(existingObj, obj);
        } else {
          this._resource.set(obj.uid, obj);
        }

        Iterators.forEach(predicates.keys(), key => {
          const predicate = predicates.get(key)!;

          // store nodes from the predicate
          this.addJsonData(predicate);
          const existingObj = this._resource.get(obj.uid)!;
          const pred = existingObj[key] as Set<INode>;

          predicate.forEach(p => {
            const pObj = this._resource.get(p.uid)!;
            pred.add(pObj);
          });
        });

        return this;
      }

      (data as IObjectLiteral[]).forEach(d => {
        this.addJsonData(d);
      });

      return this;
    }

    build(): ITransaction<T> {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      // const util = require('util');
      // console.log(
      //   'Final data',
      //   util.inspect(
      //     this._root.map(o => this._resource.get(o.uid)),
      //     { colors: true, depth: 20 }
      //   )
      // );

      return new Transaction(
        this._entryType,
        Iterators.map(this._root.values(), o => this._resource.get(o.uid)!)
      );
    }
  }
}

/**
 * Module private statics
 */
namespace Private {
  /**
   * Separates predicates into a map and replaces the predicate array
   * with a Set to make sure we don't have duplicate nodes in predicates.
   */
  export function separatePredicates(obj: INode): { obj: INode; predicates: Map<string, INode[]> } {
    const predicates: Map<string, INode[]> = new Map();

    Object.keys(obj).forEach((key: string) => {
      if (isPredicate(obj, key)) {
        predicates.set(key, obj[key]);
        obj[key] = new Set();
      }
    });

    return { obj, predicates };
  }

  export function isPredicate(obj: IObjectLiteral<any>, key: string): boolean {
    return isAllNodes(obj[key]);
  }

  export function isAllNodes(obj: IObjectLiteral<any>[]): obj is INode[] {
    return Array.isArray(obj) && (obj as Array<any>).every(isNode);
  }

  export function isNode(obj: IObjectLiteral<any>): obj is INode {
    return !!obj.uid;
  }
}
