export class ArrayChangelog {
  old: any[];
  new: any[];

  constructor(initial?: any[]) {
    if (!initial) {
      this.old = [];
      this.new = [];
    } else {
      // old is always a shallow copy
      this.old = initial.slice(0);
      // new is the reference
      this.new = initial;
    }
  }

  get deletions(): any[] {
    return this.old.filter(x => !this.new.includes(x));
  }

  get additions(): any[] {
    return this.new.filter(x => !this.old.includes(x));
  }

  setNewValues(values: any[]): void {
    this.new = values;
  }
}
