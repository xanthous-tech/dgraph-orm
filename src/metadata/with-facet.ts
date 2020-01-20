import { Constructor } from '../utils/class';

export class WithFacetMetadata {
  constructor(readonly args: WithFacetMetadata.Args) {
    //
  }
}

export namespace WithFacetMetadata {
  export interface Args {
    /**
     * Target class which the facet is added to.
     */
    target: Object;

    /**
     * Name of the property which facet is applied to.
     */
    propertyName: string;

    /**
     * Constructor class of the facet definition.
     */
    constructor: Constructor;
  }
}
