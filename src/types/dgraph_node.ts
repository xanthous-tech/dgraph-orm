import { plainToClass } from 'class-transformer';
import * as instauuid from 'instauuid';
import { isArray } from 'util';
import { DataFactory, Quad, BlankNode, NamedNode, Quad_Object, Variable, Util as N3Util } from '@xanthous/n3';

import debugWrapper from '../utils/debug';
import { Constructor } from '../utils/class';
import { getNodeDefinition } from '../utils/metadata';

import { ChangelogTracker } from '../types/interfaces/changelog_tracker';
import { ArrayChangelog } from './array_changelog';
import { NodeDefinition } from './definitions/node_definiton';
import { PredicateDefinition } from './definitions/predicate_definition';

const debug = debugWrapper('changelog');

const { quad, literal, namedNode, blankNode, variable } = DataFactory;

const DGRAPH_TYPE = 'dgraph.type';

export class DgraphNode implements ChangelogTracker {
  _changelogs = new Map();
  _symbol: string = `${instauuid('hex')}`;
  _parent: DgraphNode; // parent ref

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

    const arrayPredicates = this.getArrayPredicateDefs();

    arrayPredicates.forEach(p => {
      this._changelogs.set(p.name, new ArrayChangelog());
    });

    return new Proxy(this, {
      set: (target, prop, value, receiver) => {
        if (prop.toString().startsWith('_')) {
          return Reflect.set(target, prop, value, receiver);
        }

        debug('set', target.constructor.name, prop, value);

        const predIdx = arrayPredicates.findIndex(p => p.name === prop);
        if (predIdx > -1) {
          (target._changelogs.get(prop) as ArrayChangelog).new = value.map((v: any) => {
            if (v instanceof DgraphNode) {
              v._parent = target;
            }
            return v;
          });
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

    for (const predicateKey of Object.keys(this._nodeDefinition.predicates)) {
      const predicateDef = this._nodeDefinition.predicates[predicateKey];
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

    if (N3Util.isBlankNode(node)) {
      // add dgraph.type predicate for new nodes
      nquads.push(quad(node, namedNode(DGRAPH_TYPE), literal(this.constructor.name)));
    }

    this._changelogs.forEach((value, key) => {
      if (!this.isPredicate(key)) {
        return;
      }

      if (value instanceof ArrayChangelog) {
        nquads = nquads.concat(value.additions.reduce((acc, item) => {
          let itemNode: Quad_Object;
          if (this.isArrayLiteralPredicate(key)) {
            itemNode = literal(item);
            acc.push(quad(node, namedNode(key), itemNode));
          } else {
            itemNode = item.getRDFNode();
            acc = acc.concat(item.getSetNquads());
            if (N3Util.isBlankNode(itemNode)) {
              // do facet rendering here
              acc.push(quad(node, namedNode(key), itemNode, item.getFacets()));
            }
          }
          return acc;
        }, [] as Quad[]));
      } else {
        if (!this.isFacet(key)) {
          nquads.push(quad(node, namedNode(key), literal(value)));
        }
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

  getFacets(): Variable | undefined {
    const facetKeys = Object.keys(this._nodeDefinition.facets);
    const facetString = `(${facetKeys.reduce(
      (acc: string[], fk) => {
        if (!this._changelogs.has(fk)) {
          return acc;
        }

        return acc.concat([`${this._nodeDefinition.facets[fk].name}=${Reflect.get(this, fk)}`]);
      },
      [],
    )})`;

    return facetString === '()' ? undefined : variable(facetString);
  }

  private getArrayPredicateDefs(): PredicateDefinition[] {
    return Object.keys(this._nodeDefinition.predicates).map(
      pk => this._nodeDefinition.predicates[pk],
    ).filter(p => p.isArray);
  }

  private isFacet(key: string | number | symbol): boolean {
    return key in this._nodeDefinition.facets;
  }

  private isPredicate(key: string | number | symbol): boolean {
    return key in this._nodeDefinition.predicates;
  }

  private isArrayPredicate(key: string | number| symbol): boolean {
    return this.isPredicate(key) && this._nodeDefinition.predicates[key as string].isArray;
  }

  private isArrayLiteralPredicate(key: string | number| symbol): boolean {
    return this.isArrayPredicate(key) && typeof this._nodeDefinition.predicates[key as string].type !== 'function';
  }
}
