import { SchemaGenerable } from '../interfaces/schema_generable';
import { IndexOptions } from '../options/index_options';

export class PredicateDefinition implements SchemaGenerable {
  name: string;
  type: string;
  index?: IndexOptions;
  count?: boolean;

  generateSchema(): string {
    throw new Error("Method not implemented.");
  }
}
