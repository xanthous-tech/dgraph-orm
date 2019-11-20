import { ObjectLiteral } from '../utils/type';

// TODO: dgraph type enums

export enum PropertyType {
  Default = 'default',
  Int = 'int',
  Float = 'float',
  String = 'string',
  Bool = 'bool',
  DateTime = 'dateTime',
  Geo = 'geo',
  Password = 'password',
  Uid = 'uid',
}

const REFLECTED_TYPE_TO_PREDICATE_TYPE: ObjectLiteral<PropertyType> = {
  string: PropertyType.String,
  boolean: PropertyType.Bool,
  number: PropertyType.Float // infer number to float.
};

/**
 * Utility namespace for operating predicate types.
 */
export namespace PropertyTypeUtils {
  /**
   * Convert a reflected type to dgraph predicate type.
   */
  export function convertReflectedToPropertyType(reflected: string): PropertyType {
    return REFLECTED_TYPE_TO_PREDICATE_TYPE[reflected];
  }
}
