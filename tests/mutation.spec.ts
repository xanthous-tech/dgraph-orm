import { Writer } from '@xanthous/n3';

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
      .addJsonData(data)
      .build();

    transaction.tree[0].hobbies.get()[0].name = 'New Hobby Name';
    console.log(transaction.getSetNQuadsString(transaction.tree[0]));

    // const hobby = new Hobby();
    const hobby = transaction.nodeFor(Hobby);
    hobby.name = 'Stuff';

    transaction.tree[0].hobbies.add(hobby);

    console.log(transaction.getSetNQuadsString(transaction.tree[0]));
  });

  it('should handle nested correctly', function() {
    class PersonKnows {
      @Facet()
      familiarity: number;
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
        'Person.friends': [
          {
            uid: '0x2',
            'Person.name': 'Jane',
            'Person.friends|familiarity': 999,
            'Person.friends': [
              {
                uid: '0x3',
                'Person.friends|familiarity': 999,
                'Person.name': 'Kamil'
              }
            ]
          }
        ]
      }
    ];

    const transaction = TransactionBuilder.of(Person)
      .addJsonData(data)
      .build();

    transaction.tree[0].name = 'New John';
    const friends = transaction.tree[0].friends;

    friends.get()[0].name = 'New Jane';
    friends.getFacet(friends.get()[0])!.familiarity = 666;
    transaction.tree[0].friends.get()[0].friends.get()[0].name = 'New Kamil';

    //
    console.log(transaction.getSetNQuadsString(transaction.tree[0]));
  });

  it('should handle nested correctly for fresh instances', function() {
    class PersonKnows {
      @Facet()
      familiarity: number;
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

    const john = transaction.nodeFor(Person);
    john.name = 'John';

    const jane = transaction.nodeFor(Person);
    jane.name = 'Jane';

    const kamil = transaction.nodeFor(Person);
    kamil.name = 'Kamil';

    kamil.friends.withFacet({ familiarity: 42 }).add(jane);
    kamil.friends.withFacet({ familiarity: 99 }).add(john);

    // TODO: We need to be able to init a new transaction ?
    console.log(transaction.getSetNQuadsString(kamil));
  });

  it('should use refer to same temporary uid for node', function() {
    @Node()
    class Person {
      @Uid()
      id: string;

      @Property()
      name: string;
    }

    const kamil = new Person();
    kamil.name = 'Kamil';

    // expect(MutationBuilder.getSetNQuadsString(kamil)).toEqual(MutationBuilder.getSetNQuadsString(kamil));
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

    const mutation = transaction.getSetNQuads(row);

    const rowId = mutation.nodeMap.get(row)!.value;
    const fromRowId = mutation.quads.find(r => r.predicate.id === 'from_row')!.object.value;

    expect(rowId).toEqual(fromRowId);
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

    console.log(transaction.getSetNQuadsString(john));
    console.log(transaction.getSetNQuadsString(lola));

    const { quads, nodeMap } = transaction.getSetNQuads(john);
    console.log(nodeMap.get(john));

    const string = new Writer({ format: 'N-Quads' }).quadsToString(quads);
    console.log(string);
  });
});
