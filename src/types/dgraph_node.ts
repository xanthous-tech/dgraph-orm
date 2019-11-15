import { plainToClass } from 'class-transformer';
import * as instauuid from 'instauuid';
import { isArray } from 'util';

import debugWrapper from '../utils/debug';
import { Constructor } from '../utils/class';
import { getNodeDefinition } from '../utils/metadata';

import { ChangelogTracker } from '../types/interfaces/changelog_tracker';
import { ArrayChangelog } from './array_changelog';

const debug = debugWrapper('changelog');

// const BLACKLIST = ['_changelogs', '_symbol', 'uid'];

export class DgraphNode implements ChangelogTracker {
  _changelogs = new Map();
  _symbol: string = `${instauuid('hex')}`;

  uid?: string;

  /**
   * Loads from plain object and creates class. Clears changelogs at the end.
   * @param plain plain object
   */
  static load<T extends DgraphNode>(target: Constructor<T>, plain: any): T[] | T {
    const result = plainToClass(target, plain);

    if (isArray(result)) {
      result.forEach(r => r.clearChangelogs());
    } else {
      result.clearChangelogs();
    }

    return result;
  }

  constructor() {
    const nodeDefinition = getNodeDefinition(this);

    if (!nodeDefinition) {
      throw new Error(`${this} does not have node definition!`);
    }

    const arrayPredicates = nodeDefinition.predicates.filter(p => p.isArray);

    arrayPredicates.forEach(p => {
      this._changelogs.set(p.name, new ArrayChangelog());
    });

    return new Proxy(this, {
      // get: (target, prop, receiver) => {
      //   const value = Reflect.get(target, prop, receiver);
      //   const predIdx = arrayPredicates.findIndex(p => p.name === prop);

      //   if (value && predIdx > -1) {
      //     return new Proxy(value, {
      //       set: (array, idx, value, receiver) => {
      //         // filter out the non-numeric updates
      //         if (isNaN(Number(idx))) {
      //           return true;
      //         }

      //         debug('array set', target.constructor.name, prop, idx, value);
      //         const result = Reflect.set(array, idx, value, receiver);
      //         if (result) {
      //           (target._changelogs.get(prop) as ArrayChangelog).new = array;
      //         }
      //         return result;
      //       },
      //       apply: (array, thisArg, argsList) => {
      //         debug('array method', thisArg, argsList);
      //       }
      //     });
      //   } else {
      //     return value;
      //   }
      // },
      set: (target, prop, value, receiver) => {
        if (prop.toString().startsWith('_')) {
          return true;
        }

        debug('set', target.constructor.name, prop, value);

        const predIdx = arrayPredicates.findIndex(p => p.name === prop);
        if (predIdx > -1) {
          (target._changelogs.get(prop) as ArrayChangelog).new = value;
        } else {
          target._changelogs.set(prop, value);
        }

        return Reflect.set(target, prop, value, receiver);
      },
    });
  }

  /**
   * recursively clears changelogs for current node and all its predicates
   */
  clearChangelogs(): void {
    this._changelogs.clear();

    const nodeDef = getNodeDefinition(this);
    if (!nodeDef) {
      return;
    }

    for (const predicateDef of nodeDef.predicates) {
      const predicate = Reflect.get(this, predicateDef.name);

      if (predicateDef.isArray) {
        this._changelogs.set(predicateDef.name, new ArrayChangelog(predicate));
      }

      if (typeof predicateDef.type !== 'function' || !predicate) {
        continue;
      }

      if (isArray(predicate)) {
        predicate.forEach(p => {
          if (p instanceof DgraphNode) {
            p.clearChangelogs();
          }
        });
      } else {
          if (predicate instanceof DgraphNode) {
            predicate.clearChangelogs();
          }
      }
    }

    // for (const prop of this.getOwnProps()) {
    //   if ()
    // }
  }

  // private getOwnProps(): string[] {
  //   return Object.getOwnPropertyNames(this).filter(n => BLACKLIST.indexOf(n) < 0);
  // }
}
