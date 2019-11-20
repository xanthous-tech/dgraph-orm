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
     * Name of the property which facet is applied to.
     */
    propertyName: string;
  }
}
