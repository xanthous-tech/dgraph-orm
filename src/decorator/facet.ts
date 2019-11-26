/**
 * Facet decorator to annotate a facet property on a node.
 */
export function Facet(): ClassDecorator {
  return function (target: Function): void {
    //
  }
}

export namespace Facet {
  /**
   * Facet decorator options.
   */
  export interface IOptions {
    prefix?: string;
  }
}
