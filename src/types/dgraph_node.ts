import { ChangelogTracker } from '../types/interfaces/changelog_tracker';
import debugWrapper from '../utils/debug';

const debug = debugWrapper('changelog');

export class DgraphNode implements ChangelogTracker {
  _changelogs: any[];

  uid: string;

  constructor() {
    return new Proxy(this, {
      set: (target, prop, value, receiver) => {
        debug('set', target, prop, value, receiver);
        return Reflect.set(target, prop, value, receiver);
      },
    });
  }

  addChangelog(changelog: any): void {
    throw new Error("Method not implemented.");
  }
  clearChangelog(): void {
    throw new Error("Method not implemented.");
  }
}
