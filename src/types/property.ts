import { DataFactory, NamedNode } from '@xanthous/n3';

import { IObjectLiteral } from '../utils/type';

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
  Uid = 'uid'
}

export enum DataType {
  Default = 'xs:string',
  Int = 'xs:int',
  Float = 'xs:float',
  String = 'xs:string',
  Bool = 'xs:boolean',
  DateTime = 'xs:dateTime',
  Geo = 'geo:geojson',
  Password = 'xs:password'
}

const REFLECTED_TYPE_TO_PREDICATE_TYPE: IObjectLiteral<PropertyType> = {
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

  export function getLiteralTypeNamedNode(propertyType: PropertyType): NamedNode {
    switch (propertyType) {
      case PropertyType.Default:
        return DataFactory.namedNode(DataType.Default);
      case PropertyType.Int:
        return DataFactory.namedNode(DataType.Int);
      case PropertyType.Float:
        return DataFactory.namedNode(DataType.Float);
      case PropertyType.Bool:
        return DataFactory.namedNode(DataType.Bool);
      case PropertyType.DateTime:
        return DataFactory.namedNode(DataType.DateTime);
      case PropertyType.Geo:
        return DataFactory.namedNode(DataType.Geo);
      case PropertyType.Password:
        return DataFactory.namedNode(DataType.Password);
      default:
        return DataFactory.namedNode(DataType.Default);
    }
  }
}
