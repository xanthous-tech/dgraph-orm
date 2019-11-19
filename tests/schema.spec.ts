import { Node, Predicate, getGlobalDgraphSchema } from '../src';
import { clearAllStorage } from '../src/storage';

beforeEach(() => {
  clearAllStorage();
});

test('schema check', () => {
  // @Node()
  // class TestNode {
  //   @Predicate()
  //   name: string;
  // }

  const TestNode = Node()(class TestNode {
    name: string;

    constructor() {
      Predicate()(this, 'name');
    }
  });

  console.log(getGlobalDgraphSchema());
});