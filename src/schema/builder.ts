import { MetadataStorage } from '../metadata/storage';
import { IndexMetadata, PropertyMetadata } from '../metadata/property';
import { PropertyType } from '..';
import { Iterators } from '../utils/iterator';
import { PredicateMetadata } from '../metadata/predicate';

/**
 * Schema builder namespace for building global schema based on the metadata storage.
 */
export namespace SchemaBuilder {
  /**
   * Build the DGraph schema based on the type definitions.
   */
  export function build(): string {
    const nodes = new Map<string, INodeSchemaDefinition>();
    MetadataStorage.Instance.nodes.forEach(n =>
      nodes.set(n.args.name, {
        name: n.args.name,
        type: n.args.dgraphType,
        properties: [],
        indices: [],
        predicates: []
      })
    );

    Iterators.forEach(MetadataStorage.Instance.predicates.keys(), k => {
      nodes.get(k)!.predicates = MetadataStorage.Instance.predicates.get(k)!;
    });

    Iterators.forEach(MetadataStorage.Instance.properties.keys(), k => {
      nodes.get(k)!.properties = MetadataStorage.Instance.properties.get(k)!;
    });

    Iterators.forEach(MetadataStorage.Instance.indices.keys(), k => {
      nodes.get(k)!.indices = MetadataStorage.Instance.indices.get(k)!;
    });

    let schema = '';
    for (const node of nodes.values()) {
      schema += buildNodeSchema(node.type, node.properties, node.predicates);
    }

    for (const node of nodes.values()) {
      for (const property of node.properties) {
        schema += buildPropertySchema(node, property.args);
      }

      for (const predicate of node.predicates) {
        schema += buildPredicateSchema(predicate.args);
      }
    }

    return schema;
  }

  function buildNodeSchema(nodeType: string, properties: PropertyMetadata[], predicates: PredicateMetadata[]): string {
    const _predicates = predicates.map(p => `  ${p.args.name}: [${p.args.type().name}]`);
    const _properties = properties.map(
      p => `  ${p.args.name}: ${p.args.isArray ? toArrayType(p.args.type) : p.args.type}`
    );

    return `type ${nodeType} {
${_properties.concat(_predicates).join('\n')}
}
`;
  }

  function buildPropertySchema(node: INodeSchemaDefinition, property: PropertyMetadata.IArgs): string {
    const parts = [];

    const index = node.indices.find(i => i.args.propertyName === property.propertyName);
    parts.push(`${property.name}: ${property.isArray ? toArrayType(property.type) : property.type}`);

    if (index) {
      parts.push(`@index(${index.args.type})`);
    }

    return parts.join(' ') + ' .\n';
  }

  function buildPredicateSchema(predicate: PredicateMetadata.IArgs): string {
    const parts = [];

    parts.push(`${predicate.name}: ${toArrayType('uid')}`);

    if (predicate.count) {
      parts.push(`@count`);
    }

    return parts.join(' ') + ' .\n';
  }

  function toArrayType(type: PropertyType | string): string {
    return `[${type}]`;
  }

  /**
   * Defines a temporary node schema definition used as an intermediate
   * representation of a node schema derived from the metadata storage.
   */
  interface INodeSchemaDefinition {
    name: string;
    type: string;
    predicates: PredicateMetadata[];
    properties: PropertyMetadata[];
    indices: IndexMetadata[];
  }
}
