import { PropertyType } from '..';

export class PropertyMetadata {
  constructor(readonly args: PropertyMetadata.IArgs) {
    //
  }
}

export namespace PropertyMetadata {
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
    type: PropertyType;

    /**
     * Is the predicate an array type.
     */
    isArray: boolean;
  }
}
