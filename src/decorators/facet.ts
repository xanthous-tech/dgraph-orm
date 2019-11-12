import { Expose } from 'class-transformer';

import { FacetOptions } from '../types/options/facet_options';

// basically we wrap class-transformer's @Expose to achieve facet mapping

export function Facet(options: FacetOptions | string): PropertyDecorator {
  return function predicateDecorator(target: Object, key: string): void {
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

    return exposeDecorator(target, key);
  };
}
