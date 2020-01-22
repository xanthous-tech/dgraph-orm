import { DeleteEnvelope } from './envelope';

export namespace DeleteBuilder {
  export function createEnvelope<T>(node: T): DeleteEnvelope<T> {
    return new DeleteEnvelope<T>();
  }
}
