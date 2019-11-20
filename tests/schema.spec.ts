import { Node, Predicate, PredicateType, SchemaBuilder } from '../src';

describe('Global schema', () => {
  it('should build the correct schema', function() {
    @Node()
    class Work {
      @Predicate()
      name: string;
    }

    @Node()
    class Person {
      @Predicate({ name: 'name' })
      name: string;

      @Predicate({ type: [PredicateType.String] })
      hobbies: string[];

      @Predicate({ type: [Work] })
      works: Work[]
    }

    Private.noopClass(Person);
    Private.noopClass(Work);

    console.log(SchemaBuilder.build());
  });
});

namespace Private {
  /**
   * Bypass for unused locals.
   */
  export function noopClass(clz: any) {
    // To bypass unused import.
  }
}
