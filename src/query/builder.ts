import { MetadataStorage } from '../metadata/storage';
import { Constructor } from 'src/utils/class';

/**
 *
 * Utility for creating queries based on the schema definitions.
 *
 * @example
 * ```
 * const { handle, fragment } = QueryBuilder.buildFragment(Person, {
 *   exclude: ['friends']
 * });
 *
 * console.log(handle);
 * console.log(fragment);
 *
 * // Arbitrary example output
 *
 * // ...personDataFragment
 * //
 * // fragment personDataFragment {
 * //    Person.name
 * //    id
 * // }
 * ```
 *
 * @category PublicAPI
 */
export namespace QueryBuilder {
  export function buildFragment<T extends Object, K extends keyof T = keyof T>(
    definition: Constructor<T>,
    options?: IBuildFragmentOptions<K>
  ): IFragment {
    const exclude = (options && options.exclude) || [];
    const predicateMetadata = MetadataStorage.Instance.predicates.get(definition.name);
    const propertiesMetadata = MetadataStorage.Instance.properties.get(definition.name);
    const uidsMetadata = MetadataStorage.Instance.uids.get(definition.name);

    const uids = (uidsMetadata || []).map(uid => uid.args.propertyName);
    const properties = (propertiesMetadata || []).map(propertyMetadata => propertyMetadata.args.name);
    const predicates = (predicateMetadata || []).map(item => item.args.name);
    const fragmentItems = [...properties, ...predicates, ...uids].filter(
      key => !((exclude as any) as string[]).includes(key)
    );

    const handle = `${definition.name.toLowerCase()}DataFragment`;

    return {
      handle: `...${handle}`,
      fragment: Private.getFragmentString(handle, fragmentItems)
    };
  }

  export interface IFragment {
    fragment: string;
    handle: string;
  }

  export interface IBuildFragmentOptions<T> {
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
