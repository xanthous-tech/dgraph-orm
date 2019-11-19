import { Node, Predicate, getGlobalDgraphSchema } from '../src';
import { clearAllStorage } from '../src/storage';

describe('Global schema', () => {
  beforeEach(() => {
    clearAllStorage();
  });

  it('should generate correct schema', function() {
    const baselineSchema = `type Person {
  Person.name: string
}
type Work {
  Work.name: string
}
Person.name: string .
Work.name: string .`;

    @Node()
    class Person {
      @Predicate()
      name: string;
    }

    @Node()
    class Work {
      @Predicate()
      name: string;
    }

    expect(getGlobalDgraphSchema() === baselineSchema);

    Private.noopClass(Person);
    Private.noopClass(Work);
  });

  it('should complain if predicates collide', function() {
    @Node()
    class Person {
      @Predicate({ name: 'name' })
      name: string;
    }

    const collider = () => {
      @Node()
      class Work {
        @Predicate({ name: 'name' })
        name: boolean;
      }

      Private.noopClass(Work);
    };

    expect(collider).toThrow();

    Private.noopClass(Person);
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
