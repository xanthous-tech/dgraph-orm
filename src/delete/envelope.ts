export class DeleteEnvelope<T> {
  constructor(private readonly node: T) {
    //
  }

  public detach(node: Object) {
    console.log(this.node);
    return this;
  }

  public delete(node: Object) {
    console.log(this.node);
    return this;
  }

  public getDeleteNQuadsString(): string {
    return 'delete quads string';
  }
}
