import { DataFactory, Quad, Writer, Util, NamedNode, BlankNode } from '@xanthous/n3';

import { Iterators } from '../utils/iterator';
import { MetadataStorage } from '../metadata/storage';
import { PropertyTypeUtils } from '../types/property';
import { IObjectLiteral } from '../utils/type';

import { IDiffEnvelope } from './transaction';
import { PredicateImpl } from './predicate-impl';
import { FacetStorage } from './facet-storage';

import quad = DataFactory.quad;
import namedNode = DataFactory.namedNode;
import literal = DataFactory.literal;
import variable = DataFactory.variable;

/**
 * Dgraph type prefix to add on the new nodes.
 */
const DGRAPH_TYPE = 'dgraph.type';

/**
 * Namespace for mutation builder utilities.
 *
 * It wraps a diff tracker and builds mutations string based on stored Metadata.
 */
export class MutationBuilder {
  constructor(private readonly diff: IDiffEnvelope<any>, private readonly tempIdsMap: WeakMap<Object, string>) {}

  /**
   * Get set mutations for transaction with quads as string.
   */
  public getSetNQuadsString(): string {
    const log = (...i: any[]) => void 0;
    // console.log(...i);

    Iterators.forEach(this.diff.facets.getInstancesIterable(), i => log('facet', i));
    Iterators.forEach(this.diff.properties.getInstancesIterable(), i => log('property', i));
    Iterators.forEach(this.diff.predicates.iterable, i => log('predicate', i));

    const quads = this.getSetNQuads();
    return new Writer({ format: 'N-Quads' }).quadsToString(quads);
  }

  /**
   * Get set mutations for transaction.
   */
  public getSetNQuads(): Quad[] {
    const quads: Quad[] = [];
    const connections: Quad[] = [];

    const created = new WeakMap<Object, BlankNode | NamedNode>();

    const createNode = (p: Object): BlankNode | NamedNode => {
      const pn = this.getNodeForInstance(p);
      if (!created.get(p)) {
        if (Util.isBlankNode(pn)) {
          // Create a new node
          quads.push(quad(pn, namedNode(DGRAPH_TYPE), literal(Private.getNodeTypeName(p))));
        }
        // Set mutations
        quads.push.apply(quads, this.getSetChangeQuads(p, pn));
        created.set(p, pn);
      }

      return pn;
    };

    for (let predicate of this.diff.predicates.iterable as IterableIterator<PredicateImpl<any, any>>) {
      const parent = predicate._parent;
      const parentNode = createNode(parent);

      const key = predicate._metadata.args.name;
      const propertyName = predicate._metadata.args.propertyName;

      predicate.get().forEach((child: Object) => {
        const childNode = createNode(child);
        const facetValue = Private.getFacetValue(propertyName, parent, child);

        // Create a relation between parent and predicate
        //   or update the existing with new facet values.
        if (predicate.getDiff().has(child) || this.diff.facets.getSets(facetValue).length > 0) {
          const facets = this.diff.facets
            .getTrackedProperties(facetValue)
            .map(key => ({ key, value: Reflect.get(facetValue, key) }))
            .map(kv => `${kv.key}=${kv.value}`);

          if (facets.length > 0) {
            connections.push(quad(parentNode, namedNode(key), childNode, variable(`(${facets.join(',')})`)));
          } else {
            connections.push(quad(parentNode, namedNode(key), childNode));
          }
        }
      });
    }

    return quads.concat(connections);
  }

  private getSetChangeQuads(target: Object, targetNode: NamedNode | BlankNode): Quad[] {
    const metadata = MetadataStorage.Instance.properties.get(target.constructor.name);

    if (!metadata) {
      return []; // probably shouldn't happen
    }

    const quads: Quad[] = [];
    const changes = this.diff.properties.getSets(target);
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

  export function getNodeTypeName(node: IObjectLiteral<any>): string {
    const metadata = MetadataStorage.Instance.nodes.get(node.constructor.name);
    return metadata!.args.dgraphType;
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
