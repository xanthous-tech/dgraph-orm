/**
 * A generic object literal type.
 */
export interface IObjectLiteral<T = any> {
  [key: string]: T;
}
