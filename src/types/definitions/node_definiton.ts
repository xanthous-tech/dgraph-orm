import { SchemaGenerable } from '../interfaces/schema_generable';
import { PredicateDefinition } from './predicate_definition';

export class NodeDefinition implements SchemaGenerable {
  name: string;
  predicates: PredicateDefinition[];

  constructor(name: string) {
    this.name = name;
    this.predicates = [];
  }

  generateSchema(): string {
    throw new Error("Method not implemented.");
  }
}
