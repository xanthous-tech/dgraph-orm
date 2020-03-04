import { Property, PropertyType, Uid, Node, Predicate, IPredicate, TransactionBuilder } from '../src';
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
          },
          {
            uid: '0x3',
            'Person.name': 'Kamil'
          }
        ]
      }
    ];

    const transaction = TransactionBuilder.of(Person)
      .addJsonData(data)
      .setRoot({ uid: '0x1' })
      .build();

    const jane = transaction.tree[0].friends.get()[0];
    const kamil = transaction.tree[0].friends.get()[1];

    transaction.delete(kamil);
    transaction.tree[0].friends.delete(jane);

    expect(transaction.getDeleteNQuadsString()).toEqual(
      `<0x3> * * .
<0x2> * * .
<0x1> <Person.friends> <0x2> .
`
    );
  });
});
