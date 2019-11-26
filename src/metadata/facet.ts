export class FacetMetadata {
  constructor(readonly args: FacetMetadata.IArgs) {
    //
  }
}

export namespace FacetMetadata {
  export interface IArgs {
    /**
     * Target class which the facet is added to.
     */
    target: Object;

    /**
     * key of the decorated property.
     */
    propertyName: string;
  }
}
