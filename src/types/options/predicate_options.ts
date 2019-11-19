import { IndexOptions } from './index_options';
import { DgraphType } from '../dgraph_types';

export class PredicateOptions {
  type?: DgraphType | Function;
  isArray?: boolean;
  index?: IndexOptions;
  lang?: boolean;
  count?: boolean;
  reverse?: boolean;

  /**
   * Name of the predicate that is created in DGraph.
   *
   * ### Notes
   * Setting name property lets user to reuse a global predicate between
   * different nodes.
   */
  name?: string;
}
