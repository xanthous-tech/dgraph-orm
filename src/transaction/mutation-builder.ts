import { DataFactory, Quad, Writer, Util, NamedNode, BlankNode } from '@xanthous/n3';

import { MetadataStorage } from '../metadata/storage';
import { CircularTracker } from '../utils/circular-tracker';
import { PropertyTypeUtils } from '../types/property';

import { IObjectLiteral } from '../utils/type';
import { PredicateImpl } from './predicate-impl';
import { FacetStorage } from './facet-storage';
import { DiffTracker } from './diff-tracker';

import quad = DataFactory.quad;
import namedNode = DataFactory.namedNode;
import literal = DataFactory.literal;
import variable = DataFactory.variable;

/**
 * Dgraph type prefix to add on the new nodes.
 */
const DGRAPH_TYPE = 'dgraph.type';

/**
 * A generic type for built mutation value.
 */
export interface ISetMutation<T> {
  quads: T;

  /**
   * Map of temporary uids created during the mutation build.
   */
  nodeMap: WeakMap<Object, BlankNode | NamedNode>;
}

/**
 * Namespace for mutation builder utilities.
 *
 * It wraps a diff tracker and builds mutations string based on stored Metadata.
 */
export class MutationBuilder {
  constructor(private readonly tracker: DiffTracker, private readonly tempIdsMap: WeakMap<Object, string>) {}

  /**
   * Given a target object, returns set mutation with quads as string.
   */
  public getSetNQuadsString(target: Object): ISetMutation<string> {
    const { quads, nodeMap } = this.getSetNQuads(target);

    return {
      nodeMap,
      quads: new Writer({ format: 'N-Quads' }).quadsToString(quads)
    };
  }

  /**
   * Given a target object, returns set mutation.
   */
  public getSetNQuads(target: Object): ISetMutation<Quad[]> {
    const quads: Quad[] = [];
    const connections: Quad[] = [];

    const created = new WeakMap<Object, BlankNode | NamedNode>();
    const tracker = new CircularTracker();

    const recursePredicates = (t: Object, tn: BlankNode | NamedNode): void => {
      const predicates = Private.getPredicatesOfNode(t);

      predicates.forEach(ps => {
        if (!ps.predicates || ps.predicates.get().length < 1) {
          return;
        }

        // Handle circular
        if (tracker.isVisited(t, ps.predicates)) {
          return;
        }
        tracker.markVisited(t, ps.predicates);

        ps.predicates.get().forEach((p: Object) => {
          const pn = this.getNodeForInstance(p);
          if (!created.get(p)) {
            if (Util.isBlankNode(pn)) {
              // Create a new node
              quads.push(quad(pn, namedNode(DGRAPH_TYPE), literal(p.constructor.name)));
            }
            // Set mutations
            quads.push.apply(quads, this.getSetChangeQuads(p, pn));
            created.set(p, pn);
          }

          const facetValue = Private.getFacetValue(ps.propertyName, t, p);

          // Create a relation between parent and predicate
          //   or update the existing with new facet values.
          if (ps.predicates.getDiff().has(p) || this.tracker.getSets(facetValue).length > 0) {
            const facets = this.tracker
              .getTrackedProperties(facetValue)
              .map(key => ({ key, value: Reflect.get(facetValue, key) }))
              .map(kv => `${kv.key}=${kv.value}`);

            if (facets.length > 0) {
              connections.push(quad(tn, namedNode(ps.key), pn, variable(`(${facets.join(',')})`)));
            } else {
              connections.push(quad(tn, namedNode(ps.key), pn));
            }
          }

          recursePredicates(p, pn);
        });
      });
    };

    const targetNode = this.getNodeForInstance(target);
    if (Util.isBlankNode(targetNode)) {
      // Create a new node
      quads.push(quad(targetNode, namedNode(DGRAPH_TYPE), literal(target.constructor.name)));
    }

    // Set mutations
    quads.push.apply(quads, this.getSetChangeQuads(target, targetNode));
    created.set(target, targetNode);

    recursePredicates(target, targetNode);

    return {
      quads: quads.concat(connections),
      nodeMap: created
    };
  }

  private getSetChangeQuads(target: Object, targetNode: NamedNode | BlankNode): Quad[] {
    const metadata = MetadataStorage.Instance.properties.get(target.constructor.name);

    if (!metadata) {
      return []; // probably shouldn't happen
    }

    const quads: Quad[] = [];
    const changes = this.tracker.getSets(target);
    if (changes.length > 0) {
      changes.forEach(c => {
        const propertyMetadata = metadata.find(pm => pm.args.propertyName === c.key || pm.args.name === c.key);

        if (!propertyMetadata) {
          return;
        }

        quads.push(
          DataFactory.quad(
            targetNode,
            DataFactory.namedNode(c.key),
            DataFactory.literal(c.get(), PropertyTypeUtils.getLiteralTypeNamedNode(propertyMetadata.args.type))
          )
        );
      });
    }

    return quads;
  }

  private getNodeForInstance(node: IObjectLiteral<any>): NamedNode | BlankNode {
    if (this.tempIdsMap.has(node)) {
      let tempID = this.tempIdsMap.get(node);
      return DataFactory.blankNode(tempID);
    }

    const metadata = MetadataStorage.Instance.uids.get(node.constructor.name);
    if (!metadata) {
      throw new Error('Node must have a property decorated with @Uid');
    }

    const uid = node[metadata[0].args.propertyName];
    return DataFactory.namedNode(uid);
  }
}

/**
 * Module private statics
 */
namespace Private {
  export function getFacetValue(propertyName: string, v: Object, w: Object): any {
    return FacetStorage.get(propertyName, v, w) || {};
  }

  export function getPredicatesOfNode(
    node: IObjectLiteral<any>
  ): Array<{ predicates: PredicateImpl; key: string; propertyName: string }> {
    const metadata = MetadataStorage.Instance.predicates.get(node.constructor.name);
    return !metadata
      ? []
      : metadata.map(m => ({
          predicates: node[m.args.propertyName] as PredicateImpl,
          key: m.args.name,
          propertyName: m.args.propertyName
        }));
  }
}
