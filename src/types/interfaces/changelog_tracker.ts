export interface ChangelogTracker {
  _changelogs: Map<string | number | symbol, any>;
  clearChangelogs(): void;
}
