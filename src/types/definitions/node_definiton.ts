import { SchemaGenerable } from '../interfaces/schema_generable';
import { PredicateDefinition } from './predicate_definition';
import { FacetDefinition } from './facet_definition';

export class NodeDefinition implements SchemaGenerable {
  name: string;
  predicates: PredicateDefinition[];
  facets: FacetDefinition[];

  constructor(name: string) {
    this.name = name;
    this.predicates = [];
    this.facets = [];
  }

  generateSchema(): string {
    return `type ${this.name} {
${this.predicates.map((predicate: PredicateDefinition) => {
  return `  ${predicate.name}: ${predicate.getTypeName()}`;
}).join('\n')}
}`;
  }
}
