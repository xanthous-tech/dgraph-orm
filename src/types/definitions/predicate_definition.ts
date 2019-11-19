import { SchemaGenerable } from '../interfaces/schema_generable';
import { IndexOptions } from '../options/index_options';
import { DgraphType } from '../dgraph_types';

export class PredicateDefinition implements SchemaGenerable {
  name: string;
  type: DgraphType | Function;
  isArray: boolean;
  index?: IndexOptions;
  lang?: boolean;
  count?: boolean;
  reverse?: boolean;

  /**
   * Check if definition is equal to another definition.
   */
  equals(other: PredicateDefinition): boolean {
    return this.type === other.type && this.isArray === other.isArray && this.name === other.name;
  }

  generateSchema(): string {
    const parts = [];
    parts.push(`${this.name}:`);
    parts.push(this.getTypeName(true));

    if (this.index) {
      parts.push(`@index(${this.index.type})`);
    }

    if (this.lang) {
      parts.push('@lang');
    }

    if (this.count) {
      parts.push('@count');
    }

    if (this.reverse) {
      parts.push('@reverse');
    }

    parts.push('.');
    return parts.join(' ');
  }

  getBaseTypeName(isRaw?: boolean): string {
    if (typeof this.type === 'function') {
      if (isRaw) {
        return 'uid';
      }

      return this.type.name;
    }

    return this.type;
  }

  getTypeName(isRaw?: boolean): string {
    if (this.isArray) {
      return `[${this.getBaseTypeName(isRaw)}]`;
    }

    return this.getBaseTypeName(isRaw);
  }
}
