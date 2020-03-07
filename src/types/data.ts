import { IObjectLiteral } from '../utils/type';

export interface INode extends IObjectLiteral {
  uid: string;
}

export type IPlainPredicates = Set<INode>;
