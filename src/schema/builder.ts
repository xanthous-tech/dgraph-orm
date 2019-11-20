import { MetadataStorage } from '../metadata/storage';
import { PropertyMetadata } from '../metadata/property';
import { PropertyType } from '..';

/**
 * Schema builder namespace for building global schema based on the metadata storage.
 */
export namespace SchemaBuilder {
  /**
   * Build the DGraph schema based on the type definitions.
   */
  export function build(): string {
    const nodes = new Map<string, NodeSchemaDefinition>();
    const properties: PropertyMetadata.IArgs[] = [];

    MetadataStorage.Instance.nodes.forEach(n => nodes.set(n.args.name, { name: n.args.name, properties: [] }));
    MetadataStorage.Instance.properties.forEach(p => {
      properties.push(p.args);
      nodes.get(p.args.target.constructor.name)!.properties.push(p.args);
    });

    let schema = '';
    for (let node of nodes.values()) {
      schema += buildNodeSchema(node.name, node.properties);
    }

    for (let property of properties) {
      schema += buildPropertySchema(property);
    }

    return schema;
  }

  function buildNodeSchema(nodeName: string, properties: PropertyMetadata.IArgs[]): string {
    return `type ${nodeName} {
${properties.map(p => `  ${p.name}: ${p.isArray ? toArrayType(p.type) : p.type}`).join('\n')}
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
    properties: PropertyMetadata.IArgs[];
  }
}
