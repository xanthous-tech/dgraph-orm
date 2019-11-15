/// <reference types="node" />

declare module 'instauuid' {
  type UuidType =
    | 'hex'
    | 'raw'
    | 'hash'
    | 'long'
    | 'number'
    | 'buffer'
    | 'base64'
    | 'decimal'
    | 'buffer_be';

  interface UuidOptions {
    type?: UuidType;

    additional?: number;

    countNumber?: number;
  }

  function instauuid(type: UuidType | UuidOptions | undefined): string;
  namespace instauuid {}
  export = instauuid;
}
