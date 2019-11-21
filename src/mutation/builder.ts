import * as UUID from 'instauuid';
import { DataFactory, Quad, Writer, Util } from '@xanthous/n3';
import { MetadataStorage } from '../metadata/storage';
import {ObjectLiteral} from "../utils/type";

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
    const node = getNodeForInstance(target);
    if (Util.isBlankNode(node)) {
      quads.push(quad(node, namedNode(DGRAPH_TYPE), literal(target.constructor.name)));
    }

    return quads;
  }

  function getNodeForInstance(node: ObjectLiteral<any>) {
    const metadata = MetadataStorage.Instance.uids.get(node.constructor.name);
    if (metadata && metadata.length > 0) {
      const uid = node[metadata[0].args.propertyName];
      return DataFactory.namedNode(uid);
    }

    return DataFactory.blankNode(UUID('hex').toString());
  }

  // function getPredicatesOfNode(node: ObjectLiteral<any>) {
  //   const metadata = MetadataStorage.Instance.predicates.get(node.constructor.name);
  //   console.log(metadata);
  // }
}
