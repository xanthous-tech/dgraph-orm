export class UidMetadata {
  constructor(readonly args: UidMetadata.Args) {
    //
  }
}

export namespace UidMetadata {
  export interface Args {
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
