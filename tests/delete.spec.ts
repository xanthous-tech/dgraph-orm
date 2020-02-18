import { Property, PropertyType, Uid, Node, ObjectMapper, Predicate, IPredicate } from '../src';
import { DeleteBuilder } from '../src/delete/builder';
import { MetadataStorageUtils } from '../src/metadata/storage';

describe('Delete handling', function() {
  beforeEach(() => MetadataStorageUtils.flush());

  it('should build delete string', function() {
    @Node()
    class Person {
      @Uid()
      uid: string;

      @Property({ type: PropertyType.String })
      name: string;

      @Predicate({ type: () => Person })
      friends: IPredicate<Person>;
    }

    const data = [
      {
        uid: '0x1',
        'Person.name': 'John',
        'Person.friends': [
          {
            uid: '0x2',
            'Person.name': 'Jane'
          }
        ]
      }
    ];

    const person = ObjectMapper.newBuilder<Person>()
      .addEntryType(Person)
      .addJsonData(data)
      .build();

    const jane = person[0].friends.get()[0];

    // Should builder return this envelope?
    // This one is mode flexible and easier to manage
    // in a transaction.
    DeleteBuilder.createEnvelope(person[0])
      .detach(jane) // Tag a node for detach
      .delete(jane) // Tag a node for delete
      .getDeleteNQuadsString(); // Talk the graph and build the string

    // This one is more difficult to manage in a transaction.
    // One removing the top level needs a separate method.
    person[0].friends
        .detach(jane)
        .delete(jane)

    // Personally, I prefer the second method if we work on containing the
    // mutations in a transaction, delete can also be managed in the same transaction.
    // It also does not require walking the tree again to build the mutation string.

    // Another idea is, if we can manage to get the transaction right, we could build
    // mutation and delete strings on the go and we would not need to walk the graph
    // at all to build these.

    // This way the object builder would return a transaction like following
    // {
    //   tree: Person[];
    //   getSetNQuads: () => string;
    //   getDeleteNQuads: () => string;
    // }
  });
});
