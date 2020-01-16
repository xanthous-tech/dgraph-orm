import * as UUID from 'instauuid';
import { DataFactory, Quad, Writer, Util, NamedNode, BlankNode } from '@xanthous/n3';

import { MetadataStorage } from '../metadata/storage';
import { ObjectLiteral } from '../utils/type';
import { DiffTracker } from './tracker';
import { FacetStorage } from '../facet';
import { PredicateImpl } from '../utils/predicate-impl';
import { CircularTracker } from '../utils/circular-tracker';

/**
 * Dgraph type prefix to add on the new nodes.
 */
const DGRAPH_TYPE = 'dgraph.type';

/**
 * Namespace for mutation builder utilities.
 */
export namespace MutationBuilder {
  import quad = DataFactory.quad;
  import namedNode = DataFactory.namedNode;
  import literal = DataFactory.literal;
  import variable = DataFactory.variable;

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
   * A data structure to attach uid to an object.
   *
   * TODO: Move this into transaction context when it is implemented.
   */
  const CREATED_MAP = new WeakMap<Object, BlankNode | NamedNode>();

  /**
   * Given a target object, returns set mutation with quads as string.
   */
  export function getSetNQuadsString(target: Object): ISetMutation<string> {
    const { quads, nodeMap } = getSetNQuads(target);

    return {
      nodeMap,
      quads: new Writer({ format: 'N-Quads' }).quadsToString(quads),
    };
  }

  /**
   * Given a target object, returns set mutation.
   */
  export function getSetNQuads(target: Object): ISetMutation<Quad[]> {
    const quads: Quad[] = [];
    const connections: Quad[] = [];

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
          const pn = Private.getNodeForInstance(p);
          if (!CREATED_MAP.get(p)) {
            if (Util.isBlankNode(pn)) {
              // Create a new node
              quads.push(quad(pn, namedNode(DGRAPH_TYPE), literal(p.constructor.name)));
            }
            // Set mutations
            quads.push.apply(quads, Private.getSetChangeQuads(p, pn));
            CREATED_MAP.set(p, pn);
          }

          const facetValue = Private.getFacetValue(ps.propertyName, t, p);

          // Create a relation between parent and predicate
          //   or update the existing with new facet values.
          if (ps.predicates.getDiff().has(p) || DiffTracker.getSets(facetValue).length > 0) {
            const facets = DiffTracker.getTrackedProperties(facetValue)
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

    const targetNode = Private.getNodeForInstance(target);
    if (Util.isBlankNode(targetNode)) {
      // Create a new node
      quads.push(quad(targetNode, namedNode(DGRAPH_TYPE), literal(target.constructor.name)));
    }

    // Set mutations
    quads.push.apply(quads, Private.getSetChangeQuads(target, targetNode));
    CREATED_MAP.set(target, targetNode);

    recursePredicates(target, targetNode);

    return {
      quads: quads.concat(connections),
      nodeMap: CREATED_MAP,
    };
  }
}

/**
 * Module private statics
 */
namespace Private {
  export function getFacetValue(propertyName: string, v: Object, w: Object) {
    return FacetStorage.get(propertyName, v, w) || {};
  }

  export function getPredicatesOfNode(node: ObjectLiteral<any>) {
    const metadata = MetadataStorage.Instance.predicates.get(node.constructor.name);
    return !metadata
      ? []
      : metadata.map(m => ({
          predicates: node[m.args.propertyName] as PredicateImpl,
          key: m.args.name,
          propertyName: m.args.propertyName
        }));
  }

  export function getFacetsForInstance(node: Object) {
    const metadata = MetadataStorage.Instance.withFacets.get(node.constructor.name);
    return metadata || [];
  }

  export function getNodeForInstance(node: ObjectLiteral<any>) {
    const metadata = MetadataStorage.Instance.uids.get(node.constructor.name);
    if (metadata && metadata.length > 0) {
      const uid = node[metadata[0].args.propertyName];
      if (uid) {
        return DataFactory.namedNode(uid);
      }
    }

    return DataFactory.blankNode(UUID('hex').toString());
  }

  export function getSetChangeQuads(target: Object, targetNode: NamedNode | BlankNode) {
    const quads: Quad[] = [];
    const changes = DiffTracker.getSets(target);
    if (changes.length > 0) {
      changes.forEach(c =>
        quads.push(DataFactory.quad(targetNode, DataFactory.namedNode(c.key), DataFactory.literal(c.get())))
      );
    }

    return quads;
  }
}
