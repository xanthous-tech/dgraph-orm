import { ObjectLiteral } from '../utils/type';

// TODO: dgraph type enums

export enum PredicateType {
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

const REFLECTED_TYPE_TO_PREDICATE_TYPE: ObjectLiteral<PredicateType> = {
  string: PredicateType.String,
  boolean: PredicateType.Bool,
  number: PredicateType.Float // infer number to float.
};

/**
 * Utility namespace for operating predicate types.
 */
export namespace PredicateTypeUtils {
  /**
   * Convert a reflected type to dgraph predicate type.
   */
  export function convertReflectedToPredicateType(reflected: string): PredicateType {
    return REFLECTED_TYPE_TO_PREDICATE_TYPE[reflected];
  }
}
