import * as UUID from 'instauuid';
import { DataFactory, Quad, Writer, Util, NamedNode, BlankNode } from '@xanthous/n3';

import { WithFacetMetadata } from 'src/metadata/with-facet';
import { MetadataStorage } from '../metadata/storage';
import { IObjectLiteral } from '../utils/type';
import { PredicateImpl } from '../utils/predicate-impl';
import { CircularTracker } from '../utils/circular-tracker';
import { PropertyTypeUtils } from '../types/property';
import { Context } from './context';

import quad = DataFactory.quad;
import namedNode = DataFactory.namedNode;
import literal = DataFactory.literal;
import variable = DataFactory.variable;
import {FacetStorage} from "./facet-storage";

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
 */
export class MutationBuilder {
  constructor(private readonly context: Context) {}

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
          const pn = Private.getNodeForInstance(p);
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
          if (ps.predicates.getDiff().has(p) || this.context.diffTracker.getSets(facetValue).length > 0) {
            const facets = this.context.diffTracker
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

    const targetNode = Private.getNodeForInstance(target);
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
    const changes = this.context.diffTracker.getSets(target);
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
}

/**
 * Module private statics
 */
namespace Private {
  /**
   * A data structure to attach uid to an object.
   *
   * TODO: Move this into transaction transaction when it is implemented.
   */
  const TEMP_ID_MAP = new WeakMap<Object, string>();

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

  export function getFacetsForInstance(node: Object): WithFacetMetadata[] {
    const metadata = MetadataStorage.Instance.withFacets.get(node.constructor.name);
    return metadata || [];
  }

  export function getNodeForInstance(node: IObjectLiteral<any>): NamedNode | BlankNode {
    const metadata = MetadataStorage.Instance.uids.get(node.constructor.name);
    if (metadata && metadata.length > 0) {
      const uid = node[metadata[0].args.propertyName];
      if (uid) {
        return DataFactory.namedNode(uid);
      }
    }

    let tempID = TEMP_ID_MAP.get(node);
    if (!tempID) {
      tempID = UUID('hex').toString();
      TEMP_ID_MAP.set(node, tempID);
    }

    return DataFactory.blankNode(tempID);
  }
}
