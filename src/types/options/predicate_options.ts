import { IndexOptions } from './index_options';
import { DgraphType } from '../dgraph_types';

export class PredicateOptions {
  type?: DgraphType;
  isArray?: boolean;
  index?: IndexOptions;
  count?: boolean;
}
