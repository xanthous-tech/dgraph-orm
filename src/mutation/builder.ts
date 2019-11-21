import * as UUID from 'instauuid';
import { DataFactory, Quad, Writer, Util, NamedNode, BlankNode } from '@xanthous/n3';

import { MetadataStorage } from '../metadata/storage';
import { ObjectLiteral } from '../utils/type';
import { DiffTracker } from './tracker';

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

    const recursePredicates = (t: Object, tn: BlankNode | NamedNode): void => {
      const predicates = getPredicatesOfNode(t);

      predicates.forEach(ps => {
        if (!ps.predicates || ps.predicates.length < 1) {
          return;
        }

        ps.predicates.forEach((p: Object) => {
          const pn = getNodeForInstance(p);
          if (Util.isBlankNode(pn)) {
            // Create a new node
            quads.push(quad(pn, namedNode(DGRAPH_TYPE), literal(p.constructor.name)));

            const facets = getFacetsForInstance(p)
              .filter(f => getValueFromNode(p, f.args.propertyName) !== undefined)
              .map(f => `[${f.args.propertyName}=${getValueFromNode(p, f.args.propertyName)}]`)
              .join(',');

            // Create a relation between parent and predicate.
            quads.push(quad(tn, namedNode(ps.key), pn, variable(facets)));
          }

          // Set mutations
          quads.push.apply(quads, getSetChangeQuads(p, pn));
          recursePredicates(p, pn);
        });
      });
    };

    const targetNode = getNodeForInstance(target);
    if (Util.isBlankNode(targetNode)) {
      // Create a new node
      quads.push(quad(targetNode, namedNode(DGRAPH_TYPE), literal(target.constructor.name)));
    }

    // Set mutations
    quads.push.apply(quads, getSetChangeQuads(target, targetNode));
    recursePredicates(target, targetNode);

    return quads;
  }

  function getSetChangeQuads(target: Object, targetNode: NamedNode | BlankNode) {
    const quads: Quad[] = [];
    const changes = DiffTracker.getSets(target);
    if (changes.length > 0) {
      changes.forEach(c => {
        if (c.type === 'property') {
          quads.push(quad(targetNode, namedNode(c.key), literal(c.get())));
        }
      });
    }

    return quads;
  }

  function getFacetsForInstance(node: Object) {
    const metadata = MetadataStorage.Instance.facets.get(node.constructor.name);
    return metadata || [];
  }

  function getNodeForInstance(node: ObjectLiteral<any>) {
    const metadata = MetadataStorage.Instance.uids.get(node.constructor.name);
    if (metadata && metadata.length > 0) {
      const uid = node[metadata[0].args.propertyName];
      if (uid) {
        return DataFactory.namedNode(uid);
      }
    }

    return DataFactory.blankNode(UUID('hex').toString());
  }

  function getPredicatesOfNode(node: ObjectLiteral<any>) {
    const metadata = MetadataStorage.Instance.predicates.get(node.constructor.name);
    return !metadata ? [] : metadata.map(m => ({ predicates: node[m.args.propertyName], key: m.args.name }));
  }

  function getValueFromNode(target: ObjectLiteral<any>, propertyName: string) {
    return target[propertyName];
  }
}
