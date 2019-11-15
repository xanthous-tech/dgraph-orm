export interface ChangelogTracker {
  _changelogs: any[];
  addChangelog(changelog: any): void;
  clearChangelog(): void;
}