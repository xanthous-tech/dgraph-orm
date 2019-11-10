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
    return `type ${this.name} {
${this.predicates.map((predicate: PredicateDefinition) => {
  return `  ${predicate.name}: ${predicate.getTypeName()}`;
}).join('\n')}
}`;
  }
}
