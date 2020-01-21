import { Transform } from 'class-transformer';

/**
 * A class constructor accepting arbitrary arguments.
 */
export type Constructor<T = {}> = new (...args: any[]) => T;

/**
 * Default Value Transform Decorator, need to use with `@Expose`
 * @param defaultValue default value to provide
 */
export function DefaultValue(defaultValue: any): PropertyDecorator {
  return Transform((value: any) => value || defaultValue, { toClassOnly: true });
}
