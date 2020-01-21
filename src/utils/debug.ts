import debug from 'debug';

export default function debugWrapper(name: string): debug.Debugger {
  return debug(`dgraph-orm:${name}`);
}
