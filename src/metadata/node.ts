export class NodeMetadata {
  constructor(readonly args: NodeMetadata.Args) {
    //
  }
}

export namespace NodeMetadata {
  export interface Args {
    /**
     * Target object which the metadata is attached to.
     */
    target: Function;

    /**
     * Name of the node.
     */
    name: string;
  }
}
