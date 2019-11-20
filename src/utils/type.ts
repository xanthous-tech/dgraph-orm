/**
 * A generic object literal type.
 */
export interface ObjectLiteral<T = any> {
  [key: string]: T;
}
