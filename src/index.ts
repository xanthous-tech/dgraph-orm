import 'reflect-metadata';

import debugWrapper from './utils/debug';
import { DgraphNode } from './types/dgraph_node';

import { Node } from './decorators/node';
import { Predicate } from './decorators/predicate';

import { NODE_STORAGE, PREDICATE_STORAGE, NODE_PREDICATE_MAPPING } from './storage';

const debug = debugWrapper('index');

@Node()
class TestNode extends DgraphNode {
  @Predicate()
  type: string;

  @Predicate()
  enabled: boolean;
}

debug('node storage:\n%O', NODE_STORAGE);
debug('predicate storage:\n%O', PREDICATE_STORAGE);
debug('node-predicate mapping:\n%O', NODE_PREDICATE_MAPPING);

const t = new TestNode();

debug(t);
