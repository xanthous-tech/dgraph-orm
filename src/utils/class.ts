/**
 * A class constructor accepting arbitrary arguments.
 */
export type Constructor<T = {}> = new (...args: any[]) => T;
