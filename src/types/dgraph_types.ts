// TODO: dgraph type enums

export enum DgraphType {
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

export const INFERRED_TYPE: { [key: string]: DgraphType } = {
  'string': DgraphType.String,
  'boolean': DgraphType.Bool,
  'number': DgraphType.Float, // infer number to float
};