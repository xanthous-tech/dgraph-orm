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

  interface IUuidOptions {
    type?: UuidType;

    additional?: number;

    countNumber?: number;
  }

  function instauuid(type: UuidType | IUuidOptions | undefined): string;
  namespace instauuid {}
  export = instauuid;
}
