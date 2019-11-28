import { Transform } from 'class-transformer';
import {DiffTracker} from "../mutation/tracker";

/**
 * A class constructor accepting arbitrary arguments.
 */
export type Constructor<T = {}> = new (...args: any[]) => T;

/**
 * Default Value Transform Decorator, need to use with `@Expose`
 * @param defaultValue default value to provide
 */
export function DefaultValue(defaultValue: any) {
  return Transform((value: any) => value || defaultValue, { toClassOnly: true });
}

export function toObject(instance: any) {
  return DiffTracker.getTrackedProperties(instance).reduce((prev, a) => {
    prev[a] = Reflect.get(instance, a);
    return prev;
  }, Object.create(null));
}
