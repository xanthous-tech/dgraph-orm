import { Expose } from 'class-transformer';
import { MetadataStorage } from '../metadata/storage';

/**
 * Tags a node property as uid.
 *
 * Transaction will populate class properties annotated with this decorator
 * when a query result is mapped, or {@link ITransaction.nodeFor} is used for
 * generating a new node.
 *
 * @category PublicAPI
 */
export function Uid(): PropertyDecorator {
  return function(target: Object, propertyName: string): void {
    // Expose the uid json property to class.
    Expose({ name: 'uid', toClassOnly: true })(target, propertyName);
    MetadataStorage.Instance.addUidMetadata({ target, propertyName });
  };
}

export namespace Uid {
  //
}
