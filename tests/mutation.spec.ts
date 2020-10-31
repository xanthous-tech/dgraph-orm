import { MetadataStorageUtils } from '../src/metadata/storage';
import { Facet, IPredicate, Node, Predicate, Property, Uid } from '../src';
import { TransactionBuilder } from '../src/transaction/transaction-builder';

describe('Mutation handling', () => {
  beforeEach(() => MetadataStorageUtils.flush());

  it('should handle circulars correctly', function() {
    @Node()
    class Hobby {
      @Uid()
      id: string;

      @Property()
      name: string;

      @Property()
      type: string;
    }

    @Node()
    class Person {
      @Uid()
      id: string;

      @Property()
      name: string;

      @Predicate({ type: () => Hobby })
      hobbies: IPredicate<Hobby>;
    }

    const data = [
      {
        uid: '0x1',
        'Person.name': 'John',
        'Person.hobbies': [{ uid: '0x2', 'Hobby.type': 'outdoor', 'Hobby.name': 'games' }]
      }
    ];

    const transaction = TransactionBuilder.of(Person)
      .setRoot(data)
      .build();

    transaction.tree[0].hobbies.get()[0].name = 'New Hobby Name';
    expect(transaction.getSetNQuadsString()).toEqual('<0x2> <Hobby.name> "New Hobby Name"^^<xs:string> .\n');

    // const hobby = new Hobby();
    const hobby = transaction.nodeFor(Hobby);
    hobby.name = 'Stuff';

    transaction.tree[0].hobbies.add(hobby);

    console.log(transaction.getSetNQuadsString());
  });

  it('should add the correct facet', () => {
    class OrderFacet {
      constructor(data: OrderFacet) {
        if (data.order != null) {
          this.order = data.order;
        }
        if (data.width != null) {
          this.width = data.width;
        }
      }

      @Facet()
      order?: number;

      @Facet()
      width?: number;
    }

    @Node()
    class Person {
      @Uid()
      id: string;

      @Property()
      name: string;

      @Predicate({ type: () => Person, facet: OrderFacet })
      friends: IPredicate<Person, OrderFacet>;
    }
    const transaction = TransactionBuilder.build();

    const lim = transaction.nodeFor(Person);
    const nick = transaction.nodeFor(Person);

    lim.name = 'Lim';
    nick.name = 'Nick';

    lim.friends.withFacet(new OrderFacet({ order: 0 })).add(nick);
    nick.friends.withFacet(new OrderFacet({ order: 1, width: 200 })).add(lim);

    console.log(transaction.getSetNQuadsString());
  });

  it('should handle falsey facet correctly', () => {
    class OrderFacet {
      @Facet()
      order?: number;
    }

    @Node()
    class Person {
      @Uid()
      id: string;

      @Predicate({ type: () => Person, facet: OrderFacet })
      friends: IPredicate<Person, OrderFacet>;
    }

    const data = [
      {
        uid: '0x1',
        'Person.name': 'John',
        'Person.friends|order': { '0': 0 },
        'Person.friends': [
          {
            uid: '0x2',
            'Person.name': 'Jane',
          }
        ]
      }
    ];

    const transaction = TransactionBuilder.of(Person)
      .setRoot(data)
      .build();

    const friends = transaction.tree[0].friends.get();
    const facet = transaction.tree[0].friends.getFacet(friends[0]);
    expect(facet).not.toBeUndefined();
    expect(facet!.order).toBe(0);
  })

  it('should handle nested correctly', function() {
    class PersonKnows {
      @Facet()
      familiarity: number;

      @Facet()
      years: number;
    }

    @Node()
    class Person {
      @Uid()
      id: string;

      @Property()
      name: string;

      @Predicate({ type: () => Person, facet: PersonKnows })
      friends: IPredicate<Person, PersonKnows>;
    }

    const data = [
      {
        uid: '0x1',
        'Person.name': 'John',
        'Person.friends|familiarity': { '0': 999 },
        'Person.friends|years': { '0': 3 },
        'Person.friends': [
          {
            uid: '0x2',
            'Person.name': 'Jane',
            'Person.friends|familiarity': { '0': 999 },
            'Person.friends': [
              {
                uid: '0x3',
                'Person.name': 'Kamil'
              }
            ]
          }
        ]
      }
    ];

    const transaction = TransactionBuilder.of(Person)
      .setRoot(data)
      .build();

    transaction.tree[0].name = 'New John';
    const friends = transaction.tree[0].friends;

    friends.get()[0].name = 'New Jane';
    friends.getFacet(friends.get()[0])!.familiarity = 666;
    transaction.tree[0].friends.get()[0].friends.get()[0].name = 'New Kamil';

    //
    expect(transaction.getSetNQuadsString()).toEqual(
      `<0x3> <Person.name> "New Kamil"^^<xs:string> .
<0x2> <Person.name> "New Jane"^^<xs:string> .
<0x1> <Person.name> "New John"^^<xs:string> .
<0x1> <Person.friends> <0x2> (familiarity=666,years=3) .
`
    );
  });

  it('should handle nested correctly for fresh instances', function() {
    class PersonKnows {
      @Facet()
      familiarity: number;

      constructor(familiarity: number) {
        this.familiarity = familiarity;
      }
    }

    @Node()
    class Person {
      @Uid()
      id: string;

      @Property()
      name: string;

      @Predicate({ type: () => Person, facet: PersonKnows })
      friends: IPredicate<Person, PersonKnows>;
    }

    const transaction = TransactionBuilder.build();

    // Create a new node.
    const john = transaction.nodeFor(Person);
    john.name = 'John';

    // Create a new node and set name to 'Jane'
    const janeData = { name: 'Jane' };
    const jane = transaction.nodeFor(Person, janeData);

    // This node already exist and we only want to introduce new
    //   predicates to it.
    const kamilData = { uid: '0x1' };
    const kamil = transaction.nodeFor(Person, kamilData);

    kamil.friends.withFacet(new PersonKnows(42)).add(jane);
    kamil.friends.withFacet(new PersonKnows(99)).add(john);

    console.log(transaction.getSetNQuadsString());
  });

  it('should use refer to same temporary uid for node', function() {
    @Node()
    class Person {
      @Uid()
      id: string;

      @Property()
      name: string;
    }

    const transaction = TransactionBuilder.build();

    const kamil = transaction.nodeFor(Person);
    kamil.name = 'Kamil';

    expect(kamil.id).not.toBeUndefined();
    expect(transaction.getSetNQuadsString()).toEqual(transaction.getSetNQuadsString());
  });

  it('should support the same recursive ID', () => {
    @Node()
    class Cell {
      @Uid()
      uid: string;

      @Predicate({ name: 'from_row', type: () => Row })
      fromRow: IPredicate<Row>;

      @Predicate({ name: 'from_column', type: () => Column })
      fromColumn: IPredicate<Column>;
    }

    @Node()
    class Row {
      @Uid()
      uid: string;

      @Predicate({ name: 'has_cell', type: () => Cell })
      hasCell: IPredicate<Cell>;
    }

    @Node()
    class Column {
      @Uid()
      uid: string;

      @Predicate({ name: 'has_cell', type: () => Cell })
      hasCell: IPredicate<Cell>;
    }

    const transaction = TransactionBuilder.build();

    const cell = transaction.nodeFor(Cell);
    const row = transaction.nodeFor(Row);
    const column = transaction.nodeFor(Column);

    cell.fromRow.add(row);
    cell.fromColumn.add(column);

    row.hasCell.add(cell);

    expect(row.uid).toEqual(cell.fromRow.get()[0].uid);
  });

  it('should be able to handle reverse edges', function() {
    @Node()
    class Person {
      @Uid()
      id: string;

      @Property()
      name: string;

      @Predicate({ type: () => Person })
      friends: IPredicate<Person>;
    }

    const transaction = TransactionBuilder.build();

    const lola = transaction.nodeFor(Person);
    lola.name = 'Lola';

    const john = transaction.nodeFor(Person);
    john.name = 'John';

    const jane = transaction.nodeFor(Person);
    jane.name = 'Jane';

    const kamil = transaction.nodeFor(Person);
    kamil.name = 'Kamil';

    john.friends.add(jane).add(lola);
    jane.friends.add(kamil).add(lola);
    kamil.friends.add(john).add(lola);
    lola.friends
      .add(jane)
      .add(kamil)
      .add(john);

    console.log(john.id);
    console.log(transaction.getSetNQuadsString());
  });
});
