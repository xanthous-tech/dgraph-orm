import { SchemaGenerable } from '../interfaces/schema_generable';
import { PredicateDefinition } from './predicate_definition';
import { FacetDefinition } from './facet_definition';

export class NodeDefinition implements SchemaGenerable {
  name: string;
  predicates: {
    [key: string]: PredicateDefinition;
  };
  facets: {
    [key: string]: FacetDefinition;
  };

  constructor(name: string) {
    this.name = name;
    this.predicates = {};
    this.facets = {};
  }

  generateSchema(): string {
    return `type ${this.name} {
${Object.keys(this.predicates).map((predicateKey: string) => {
  const predicate = this.predicates[predicateKey];
  return `  ${predicate.name}: ${predicate.getTypeName()}`;
}).join('\n')}
}`;
  }
}
