import { PredicateMetadata } from '../metadata/predicate';
import { MetadataStorage } from '../metadata/storage';
import { PredicateType } from '../types/predicate_type';

/**
 * Schema builder namespace for building global schema based on the metadata storage.
 */
export namespace SchemaBuilder {
  /**
   * Build the DGraph schema based on the type definitions.
   */
  export function build(): string {
    const nodes = new Map<string, NodeSchemaDefinition>();
    const predicates: PredicateMetadata.IArgs[] = [];

    MetadataStorage.Instance.nodes.forEach(n => nodes.set(n.args.name, { name: n.args.name, predicates: [] }));
    MetadataStorage.Instance.predicates.forEach(p => {
      // Use only primitive types on the schema.
      if (p.args.type === 'node') {
        return;
      }

      predicates.push(p.args);
      nodes.get(p.args.target.constructor.name)!.predicates.push(p.args);
    });

    let schema = '';
    for (let node of nodes.values()) {
      schema += buildNodeSchema(node.name, node.predicates);
    }

    for (let predicate of predicates) {
      schema += buildPredicateSchema(predicate);
    }

    return schema;
  }

  function buildNodeSchema(nodeName: string, predicates: PredicateMetadata.IArgs[]): string {
    return `type ${nodeName} {
${predicates.map(p => `  ${p.name}: ${p.isArray ? toArrayType(p.type) : p.type}`).join('\n')}  
}
`;
  }

  function buildPredicateSchema(predicate: PredicateMetadata.IArgs): string {
    const parts = [];
    parts.push(`${predicate.name}:${predicate.isArray ? toArrayType(predicate.type) : predicate.type}`);
    parts.push('\n');
    return parts.join(' ');
  }

  function toArrayType(type: PredicateType | 'node'): string {
    if (type === 'node') {
      // Should never arrive. Just conforming the to type definition.
      throw new Error('Bad predicate type \'node\'. Cannot use non-primitive internal type in schema')
    }

    return `[${type}]`;
  }

  /**
   * Defines a temporary node schema definition used as an intermediate
   * representation of a node schema derived from the metadata storage.
   */
  interface NodeSchemaDefinition {
    name: string;
    predicates: PredicateMetadata.IArgs[];
  }
}
