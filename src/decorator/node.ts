/**
 * Node decorator is used to mark a specific class as a Dgraph node.
 */
import { MetadataStorage } from '../metadata/storage';

export function Node(options: Node.IOptions = {}): Function {
  return function<TFunction extends Function>(target: TFunction): void {
    MetadataStorage.Instance.addNodeMetadata({
      target,
      name: target.name
    });
  };
}

export namespace Node {
  /**
   * Options for the `Node` decorator.
   */
  export interface IOptions {
    //
  }
}
