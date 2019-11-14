import debugWrapper from '../utils/debug';

const debug = debugWrapper('changelog');

export class DgraphNode {
  uid: string;

  constructor() {
    return new Proxy(this, {
      set: (t, prop, value, receiver) => {
        debug('set', t, prop, value, receiver);
        return Reflect.set(t, prop, value, receiver);
      },
    });
  }
}
