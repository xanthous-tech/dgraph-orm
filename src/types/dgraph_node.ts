import { plainToClass } from 'class-transformer';
import * as instauuid from 'instauuid';
import { isArray } from 'util';

import debugWrapper from '../utils/debug';
import { Constructor } from '../utils/class';

import { ChangelogTracker } from '../types/interfaces/changelog_tracker';
import { getNodeDefinition } from 'src/utils/metadata';
import { NodeDefinition } from './definitions/node_definiton';

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
  static load<T extends DgraphNode>(target: Constructor<T>, plain: any): T {
    const result = plainToClass(target, plain);

    if (isArray(result)) {
      result.forEach(r => r.clearChangelogs());
    } else {
      result.clearChangelogs();
    }

    return result;
  }

  constructor() {
    return new Proxy(this, {
      set: (target, prop, value, receiver) => {
        debug('set', target, prop, value, receiver);
        target._changelogs.set(prop, value);
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
      if (typeof predicateDef.type !== 'function') {
        continue;
      }

      const predicate = Reflect.get(this, predicateDef.name);

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
