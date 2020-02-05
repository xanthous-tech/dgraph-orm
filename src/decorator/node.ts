/**
 * Node decorator is used to mark a specific class as a Dgraph node.
 */
import { MetadataStorage } from '../metadata/storage';

export function Node(options: Node.IOptions = {}): Function {
  return function(target: Function): void {
    MetadataStorage.Instance.addNodeMetadata({
      target,
      name: target.name,
      dgraphType: options.dgraphType || target.name
    });
  };
}

export namespace Node {
  /**
   * Options for the `Node` decorator.
   */
  export interface IOptions {
    /**
     * Type of the node that is created in DGraph (sets `dgraph.type`). Setting name
     * property lets user to reuse a global predicate between different nodes.
     */
    dgraphType?: string;
  }
}
