import {MetadataStorage} from "../metadata/storage";
import { Constructor } from "src/utils/class";

export namespace QueryBuilder {
  export function buildFragment<T extends Object, K extends keyof T = keyof T>(instance: Constructor<T>, options?: BuildFragmentOptions<K>): Fragment {

    const exclude= (options && options.exclude ) || [];
    const predicateMetadata =  MetadataStorage.Instance.predicates.get(instance.name);
    const propertiesMetadata = MetadataStorage.Instance.properties.get(instance.name);
    const uidsMetadata = MetadataStorage.Instance.uids.get(instance.name);

    const uids = (uidsMetadata|| []).map(uid => uid.args.propertyName);
    const properties = (propertiesMetadata || []).map(propertyMetadata => propertyMetadata.args.name);
    const predicates =  (predicateMetadata || []).map((item) => item.args.name);
    const fragmentItems = [...properties, ...predicates, ...uids].filter((key) => !((exclude as any) as string[]).includes(key));

    const handle = `${instance.name.toLowerCase()}DataFragment`;

    return {
      handle: `...${handle}`,
      fragment: Private.getFragmentString(handle, fragmentItems),
    }
  }

  export interface Fragment {
    fragment: string;
    handle: string;

  }

  export interface BuildFragmentOptions<T> {
    exclude?: T[];
  }
}

namespace Private {
  export function getFragmentString(handle: string, keys: string[]): string {
    return `fragment ${handle} {
${keys.join('\n  ')}
}`;
  }
}
