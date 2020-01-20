export class UidMetadata {
  constructor(readonly args: UidMetadata.IArgs) {
    //
  }
}

export namespace UidMetadata {
  export interface IArgs {
    /**
     * Target object which the metadata is attached to.
     */
    target: Object;

    /**
     * PropertyType name which the decorator is applied to.
     */
    propertyName: string;
  }
}
