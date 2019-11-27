import { Constructor } from '../utils/class';

export class PredicateMetadata {
  constructor(readonly args: PredicateMetadata.IArgs) {
    //
  }
}

export namespace PredicateMetadata {
  export interface IArgs {
    /**
     * Target object which the metadata is attached to.
     */
    target: Object;

    /**
     * PropertyType name which the decorator is applied to.
     */
    propertyName: string;

    /**
     * Name of the predicate that is created in DGraph. By default it is
     * propertyName prefixed by the target constructor name, unless
     * user overrides it.
     */
    name: string;

    /**
     * Dgraph type of the predicate.
     * 'node' types are the transformed properties
     * which will convert into a value by the class-transformer when loading data.
     */
    type: () => Constructor;

    /**
     * Is the predicate an array type.
     */
    isArray: boolean;

    /**
     * Should dgraph count the number of edges out of each node.
     */
    count: boolean;
  }
}
