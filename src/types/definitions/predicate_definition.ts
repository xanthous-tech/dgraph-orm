import { SchemaGenerable } from '../interfaces/schema_generable';
import { IndexOptions } from '../options/index_options';
import { DgraphType } from '../dgraph_types';

export class PredicateDefinition implements SchemaGenerable {
  name: string;
  type: DgraphType | Function;
  isArray: boolean;
  index?: IndexOptions;
  count?: boolean;
  lang?: boolean;

  generateSchema(): string {
    const parts = [];
    parts.push(`${this.name}:`);

    if (this.isArray) {
      parts.push(`[${this.type}]`);
    } else {
      parts.push(this.type);
    }

    if (this.index) {
      parts.push(`@index(${this.index.type})`);
    }

    if (this.count) {
      parts.push('@count');
    }

    if (this.lang) {
      parts.push('@lang');
    }

    parts.push('.');
    return parts.join(' ');
  }
}
