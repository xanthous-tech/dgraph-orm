import { plainToClass } from 'class-transformer';
import * as instauuid from 'instauuid';
import { isArray } from 'util';
import { DataFactory, Quad, BlankNode, NamedNode, Util as N3Util } from 'n3';

import debugWrapper from '../utils/debug';
import { Constructor } from '../utils/class';
import { getNodeDefinition } from '../utils/metadata';

import { ChangelogTracker } from '../types/interfaces/changelog_tracker';
import { ArrayChangelog } from './array_changelog';
import { NodeDefinition } from './definitions/node_definiton';

const debug = debugWrapper('changelog');

const { quad, literal, namedNode, blankNode } = DataFactory;

export class DgraphNode implements ChangelogTracker {
  _changelogs = new Map();
  _symbol: string = `${instauuid('hex')}`;

  private _nodeDefinition: NodeDefinition;

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
    const nodeDef = getNodeDefinition(this);

    if (!nodeDef) {
      throw new Error(`${this} does not have node definition!`);
    }

    this._nodeDefinition = nodeDef;

    const arrayPredicates = this._nodeDefinition.predicates.filter(p => p.isArray);

    arrayPredicates.forEach(p => {
      this._changelogs.set(p.name, new ArrayChangelog());
    });

    return new Proxy(this, {
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

    for (const predicateDef of this._nodeDefinition.predicates) {
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
  }

  getSetNquads(): Quad[] {
    let nquads: Quad[] = [];
    const node = this.getRDFNode();
    this._changelogs.forEach((value, key) => {
      if (value instanceof ArrayChangelog) {
        nquads = nquads.concat(value.additions.reduce((acc, item) => {
          const itemNode = item.getRDFNode();
          acc = acc.concat(item.getSetNquads());
          if (N3Util.isBlankNode(itemNode)) {
            acc.push(quad(node, namedNode(key), itemNode));
          }
          return acc;
        }, [] as Quad[]));
      } else {
        // FIXME: facet connections
        nquads.push(quad(node, namedNode(key), literal(value)));
      }
    });

    return nquads;
  }

  // TODO
  // getDeleteNquads(): Quad[] {

  // }

  getRDFNode(): NamedNode | BlankNode {
    return this.uid ? namedNode(this.uid) : blankNode(this._symbol);
  }
}
