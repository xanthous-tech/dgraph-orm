import { MetadataStorage } from '../metadata/storage';
import { PropertyMetadata } from '../metadata/property';
import { PropertyType } from '..';
import { Iterators } from '../utils/iterator';

/**
 * Schema builder namespace for building global schema based on the metadata storage.
 */
export namespace SchemaBuilder {
  /**
   * Build the DGraph schema based on the type definitions.
   */
  export function build(): string {
    const nodes = new Map<string, NodeSchemaDefinition>();
    MetadataStorage.Instance.nodes.forEach(n => nodes.set(n.args.name, { name: n.args.name, properties: [] }));
    Iterators.forEach(MetadataStorage.Instance.properties.keys(), k => {
      console.log(k);
      nodes.get(k)!.properties = MetadataStorage.Instance.properties.get(k)!;
    });

    let schema = '';
    for (let node of nodes.values()) {
      schema += buildNodeSchema(node.name, node.properties);
    }

    for (let node of nodes.values()) {
      for (let property of node.properties) {
        schema += buildPropertySchema(property.args);
      }
    }

    return schema;
  }

  function buildNodeSchema(nodeName: string, properties: PropertyMetadata[]): string {
    return `type ${nodeName} {
${properties.map(p => `  ${p.args.name}: ${p.args.isArray ? toArrayType(p.args.type) : p.args.type}`).join('\n')}
}
`;
  }

  function buildPropertySchema(property: PropertyMetadata.IArgs): string {
    const parts = [];
    parts.push(`${property.name}:${property.isArray ? toArrayType(property.type) : property.type}`);
    return parts.join(' ') + '\n';
  }

  function toArrayType(type: PropertyType | 'node'): string {
    if (type === 'node') {
      // Should never arrive. Just conforming the to type definition.
      throw new Error("Bad property type 'node'. Cannot use non-primitive internal type in schema");
    }

    return `[${type}]`;
  }

  /**
   * Defines a temporary node schema definition used as an intermediate
   * representation of a node schema derived from the metadata storage.
   */
  interface NodeSchemaDefinition {
    name: string;
    properties: PropertyMetadata[];
  }
}
