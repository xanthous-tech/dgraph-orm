import { Constructor } from './class';
import { IObjectLiteral } from './type';
import { MetadataStorage } from '../metadata/storage';

export function transformer<T>(cls: Constructor<T>, plain: IObjectLiteral<T>): T {
  const className = cls.name;
  const instance = new cls();
  Object.assign(instance, plain);

  const properties = MetadataStorage.Instance.properties.get(className);
  if (properties) {
    for (const property of properties) {
      (instance as any)[property.args.propertyName] = plain[property.args.name];
    }
  }

  const uids = MetadataStorage.Instance.uids.get(className);
  if (uids && uids.length > 0) {
    for (const uid of uids) {
      (instance as any)[uid.args.propertyName] = plain['uid'];
    }
  }

  return instance;
}
