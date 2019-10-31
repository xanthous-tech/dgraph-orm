import { IndexOptions } from './index_options';

export class PredicateOptions {
  // TODO: use enum for type
  type?: string;

  index?: IndexOptions;
  count?: boolean;
}
