import { Expose } from 'class-transformer';

import { FacetOptions } from '../types/options/facet_options';

export function Facet(options: FacetOptions | string): PropertyDecorator {
  return function facetDecorator(target: Object, key: string): void {
    let name: string;

    if (typeof options === 'string') {
      name = `${options}|${key}`;
    } else {
      name = `${options.prefix}|${key}`;
    }

    const exposeDecorator = Expose({
      name,
      toClassOnly: true,
    });

    // basically we wrap class-transformer's @Expose to achieve facet mapping
    return exposeDecorator(target, key);
  };
}
