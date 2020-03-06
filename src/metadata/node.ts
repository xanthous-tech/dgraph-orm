export class NodeMetadata {
  constructor(readonly args: NodeMetadata.IArgs) {
    //
  }
}

export namespace NodeMetadata {
  export interface IArgs {
    /**
     * Target object which the metadata is attached to.
     */
    target: Function;

    /**
     * Name of the node.
     */
    name: string;

    /**
     * dgraph.type override.
     */
    dgraphType: string;
  }
}
