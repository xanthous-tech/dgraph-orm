import { Expose } from 'class-transformer';

import { addFacetMetadata } from '../utils/metadata';

import { FacetOptions } from '../types/options/facet_options';

export function Facet(options: FacetOptions | string): PropertyDecorator {
  return function facetDecorator(target: Object, key: string): void {
    let prefix: string;

    if (typeof options === 'string') {
      prefix = options;
    } else {
      prefix = options.prefix;
    }

    addFacetMetadata(target.constructor, key, prefix);

    const name = `${prefix}|${key}`;
    const exposeDecorator = Expose({
      name,
      toClassOnly: true,
    });

    // basically we wrap class-transformer's @Expose to achieve facet mapping
    return exposeDecorator(target, key);
  };
}
