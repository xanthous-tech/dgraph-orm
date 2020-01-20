export class FacetMetadata {
  constructor(readonly args: FacetMetadata.Args) {
    //
  }
}

export namespace FacetMetadata {
  export interface Args {
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
