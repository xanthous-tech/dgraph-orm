import { IndexOptions } from './index_options';
import { DgraphType } from '../dgraph_types';

export class PredicateOptions {
  type?: DgraphType | Function;
  isArray?: boolean;
  index?: IndexOptions;
  count?: boolean;
  lang?: boolean;
}
