import { SchemaGenerable } from '../interfaces/schema_generable';
import { IndexOptions } from '../options/index_options';
import { DgraphType } from '../dgraph_types';

export class PredicateDefinition implements SchemaGenerable {
  name: string;
  type: DgraphType;
  isArray: boolean;
  index?: IndexOptions;
  count?: boolean;

  generateSchema(): string {
    const parts = [];
    parts.push(name);

    parts.push('.');
    return parts.join(' ');
  }
}
