import { Node, Predicate, Property, Uid, PropertyType, SchemaBuilder, Index } from '../src';
import { MetadataStorageUtils } from '../src/metadata/storage';

describe('Global schema', () => {
  beforeEach(() => MetadataStorageUtils.flush());

  it('should build the correct schema', function() {
    @Node()
    class Work {
      @Uid()
      id: string;

      @Property()
      name: string;
    }

    @Node()
    class Person {
      @Uid()
      id: string;

      @Index({ type: 'hash' })
      @Property({ name: 'name' })
      name: string;

      @Property({ type: [PropertyType.String] })
      hobbies: string[];

      @Predicate({ type: () => Work })
      works: Work[];
    }

    Private.noopClass(Person);
    Private.noopClass(Work);

    const expectedSchema = `type Work {
  Work.name: string
}
type Person {
  name: string
  Person.hobbies: [string]
  Person.works: [Work]
}
Work.name: string .
name: string @index(hash) .
Person.hobbies: [string] .
Person.works: [uid] @count .
`;

    expect(SchemaBuilder.build()).toEqual(expectedSchema);
  });
});

/* eslint-disable */
namespace Private {
  /**
   * Bypass for unused locals.
   */
  export function noopClass(clz: any) {
    // To bypass unused import.
  }
}
/* eslint-enable */
