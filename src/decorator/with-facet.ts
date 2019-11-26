import { plainToClass, Transform } from 'class-transformer';

import { MetadataStorage } from '../metadata/storage';
import { Constructor } from '../utils/class';
import { ObjectLiteral } from '../utils/type';
import { FacetStorage } from '../facet';
import { Predicate } from './predicate';

/**
 * A decorator to attach facet metadata to a node property.
 */
export function WithFacet(facetClz: Constructor): PropertyDecorator {
  return function(target: Object, propertyName: string) {
    // Here we register a transformer on the predicate decorator for each facet defined on the predicate.
    // This will allow us to transform child properties facet values on runtime.
    Transform((value: any[]) => {
      //
      const facets = MetadataStorage.Instance.facets.get(facetClz.name);
      const { name } = MetadataStorage.Instance.predicates
        .get(target.constructor.name)!
        .find(p => p.args.propertyName === propertyName)!.args;

      if (!value) {
        return;
      }

      // TODO: Here we cannot check if value is an instance of PredicateImpl because the class is private.
      //  so we will 'assume' non-arrays are PredicateImpl for now.
      (Array.isArray(value) ? value : (value as Predicate<any, any>).get()).forEach(v => {
        if (facets) {
          const plain = facets.reduce<ObjectLiteral<any>>(
            (acc, f) => {
              const facetPropertyName = `${name}|${f.args.propertyName}`;

              // Move data to facet object and remove it from the node object.
              acc[f.args.propertyName] = v[facetPropertyName];
              delete v[facetPropertyName];

              return acc;
            },
            {} as ObjectLiteral<any>
          );

          // Store the facet instance.
          FacetStorage.attach(target, v, plainToClass(facetClz, plain));
        }
      });

      return value;
    })(target, propertyName);

    MetadataStorage.Instance.addWithFacetMetadata({
      target,
      propertyName,
      constructor: facetClz
    });
  };
}
