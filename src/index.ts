import 'reflect-metadata';

export * from './decorators';
export * from './types';
export { getGlobalDgraphSchema } from './storage';

// import { Operation } from 'dgraph-js';
// import { Writer } from '@xanthous/n3';
//
// import debugWrapper from './utils/debug';
// import { client } from './utils/client';
// import { DgraphNode } from './types/dgraph_node';
//
// import { Node } from './decorators/node';
// import { Predicate } from './decorators/predicate';
// import { Facet } from './decorators/facet';
//
// import {
//   NODE_STORAGE,
//   PR, FacetEDICATE_STORAGE,
//   NODE_PREDICATE_MAPPING,
//   getGlobalDgraphSchema,
//   NODE_FACET_MAPPING
// } from './storage';
// import { DgraphType } from './types/dgraph_types';
//
// const debug = debugWrapper('index');
//
// @Node()
// class ConnectedNode extends DgraphNode {
//   @Predicate()
//   name: string;
//
//   @Facet('connects')
//   order?: number;
// }
//
// @Node()
// class TestNode extends DgraphNode {
//   @Predicate({
//     type: DgraphType.String,
//     isArray: true
//   })
//   type: string[];
//
//   @Predicate()
//   enabled: boolean;
//
//   @Predicate({
//     type: ConnectedNode,
//     isArray: true
//   })
//   connects: ConnectedNode[];
// }
//
// async function main() {
//   debug('node storage:\n%O', NODE_STORAGE);
//   debug('predicate storage:\n%O', PREDICATE_STORAGE);
//   debug('node-predicate mapping:\n%O', NODE_PREDICATE_MAPPING);
//   debug('node-facet mapping:\n%O', NODE_FACET_MAPPING);
//
//   debug(getGlobalDgraphSchema());
//
//   debug('pushing schema into dgraph');
//
//   const schemaOp = new Operation();
//   schemaOp.setSchema(getGlobalDgraphSchema());
//   await client.alter(schemaOp);
//   debug('done');
//
//   // const txn = new Txn(client);
//   // const query = `query testQuery() {
//   //   test(func: type(TestNode)) {
//   //     uid
//   //     type
//   //     enabled
//   //     connects @facets(order) {
//   //       uid
//   //       name
//   //     }
//   //   }
//   // }`;
//
//   // const response = await txn.query(query);
//
//   // const responseJson = response.getJson();
//
//   // debug(responseJson);
//
//   // const nodes = DgraphNode.load(TestNode, responseJson.test) as TestNode[];
//
//   // nodes[0].enabled = false;
//   // const cNode = new ConnectedNode();
//   // cNode.name = 'C';
//   // cNode.order = 3;
//   // cNode._parent = nodes[0]; // FIXME: maybe auto-handle this parent relation
//   // nodes[0].connects.push(cNode);
//   // nodes[0].connects.shift();
//
//   const t = new TestNode();
//   // debug(Reflect.getMetadata('dgraph:node', t.constructor));
//
//   t.type = ['a', 'b'];
//   t.enabled = true;
//   const c1 = new ConnectedNode();
//   c1.name = 'C1';
//   c1.order = 1;
//   const c2 = new ConnectedNode();
//   c2.name = 'C2';
//   c2.order = 2;
//   const c3 = new ConnectedNode();
//   c3.name = 'C3';
//   c3.order = 3;
//
//   const c: ConnectedNode[] = [c1, c2, c3];
//
//   t.connects = c;
//
//   const c4 = new ConnectedNode();
//   c4.name = 'C4';
//   c4.order = 4;
//
//   // FIXME: the only caveat right now is to reset the reference so it attaches into the changelog
//   t.connects = c.concat([c4]);
//
//   debug(t._changelogs.get('connects'));
//
//   const writer = new Writer({ format: 'N-Quads' });
//
//   console.log(writer.quadsToString(t.getSetNquads()));
//
//   // console.log(writer.quadsToString(nodes.reduce((acc, n) => {
//   //   return acc.concat(n.getSetNquads());
//   // }, [] as Quad[])));
// }
//
// main();
