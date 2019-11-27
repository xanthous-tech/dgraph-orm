import * as UUID from 'instauuid';
import { DataFactory, Quad, Writer, Util, NamedNode, BlankNode } from '@xanthous/n3';

import { MetadataStorage } from '../metadata/storage';
import { ObjectLiteral } from '../utils/type';
import { DiffTracker } from './tracker';
import { Predicate } from '..';
import { FacetStorage } from '../facet';

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
   * Given a target object, returns set quads as string.
   */
  export function getSetNQuadsString(target: Object) {
    return new Writer({ format: 'N-Quads' }).quadsToString(getSetNQuads(target));
  }

  /**
   * Given a target object, returns set quads.
   */
  export function getSetNQuads(target: Object) {
    const quads: Quad[] = [];
    const connections: Quad[] = [];

    const created = new WeakMap<Object, boolean>();

    const visited = new WeakMap<Object, WeakMap<Object, boolean>>();
    const isVisited = (t: Object, p: Object) => visited.has(t) && visited.get(t)!.get(p);

    const recursePredicates = (t: Object, tn: BlankNode | NamedNode): void => {
      const predicates = Private.getPredicatesOfNode(t);

      predicates.forEach(ps => {
        if (!ps.predicates || ps.predicates.get().length < 1) {
          return;
        }

        ps.predicates.get().forEach((p: Object) => {
          if (isVisited(t, p)) {
            return;
          }

          const pn = Private.getNodeForInstance(p);
          if (!created.get(p)) {
            if (Util.isBlankNode(pn)) {
              // Create a new node
              quads.push(quad(pn, namedNode(DGRAPH_TYPE), literal(p.constructor.name)));
            }
            // Set mutations
            quads.push.apply(quads, Private.getSetChangeQuads(p, pn));
            created.set(p, true);
          }

          const facetValue = Private.getFacetValue(ps.propertyName, t, p)
          const facets = Object.keys(facetValue)
            .map(key => ({ key, value: facetValue[key] }))
            .map(kv => `[${kv.key}=${kv.value}]`)
            .join(',');

          // Create a relation between parent and predicate.
          connections.push(quad(tn, namedNode(ps.key), pn, variable(facets)));

          if (!visited.has(t)) {
            visited.set(t, new WeakMap<Object, boolean>());
          }

          visited.get(t)!.set(p, true);

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
    created.set(target, true);

    recursePredicates(target, targetNode);
    return quads.concat(connections);
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
          predicates: node[m.args.propertyName] as Predicate<any, any>,
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
      changes.forEach(c => {
        if (c.type === 'property') {
          quads.push(DataFactory.quad(targetNode, DataFactory.namedNode(c.key), DataFactory.literal(c.get())));
        }
      });
    }

    return quads;
  }
}
