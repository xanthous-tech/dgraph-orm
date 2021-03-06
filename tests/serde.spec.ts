import { Facet, Node, Predicate, IPredicate, Property, Uid, TransactionBuilder } from '../src';

import { MetadataStorageUtils } from '../src/metadata/storage';

describe('Serialize deserialize', () => {
  beforeEach(() => MetadataStorageUtils.flush());

  it('should map json to objects correctly', function() {
    @Node()
    class Work {
      @Property()
      name: string;
    }

    const data = [
      {
        uid: '0x1',
        'Work.name': 'Space Engineer'
      }
    ];

    const txn = TransactionBuilder.of(Work)
      .setRoot(data)
      .build();

    const work = txn.tree[0];
    expect(work.name).toEqual(data[0]['Work.name']);
  });

  it('should map withFacets correctly', function() {
    class PersonWorks {
      @Facet()
      public years: number;

      @Facet()
      public salary: number;
    }

    @Node()
    class Person {
      @Uid()
      id: string;

      @Property()
      name: string;
    }

    @Node()
    class Work {
      @Uid()
      id: string;

      @Property()
      name: string;

      @Predicate({ type: () => Person, facet: PersonWorks })
      people: IPredicate<Person, PersonWorks>;
    }

    const data = [
      {
        uid: '0x2',
        'Work.name': 'Space Engineer',
        'Work.people': [
          {
            uid: '0x1',
            'Person.name': 'John Doe'
          },
          {
            uid: '0x3',
            'Person.name': 'Jane Doe'
          }
        ],
        'Work.people|salary': {
          '0': 1200,
          '1': 1201
        },
        'Work.people|years': {
          '0': 10,
          '1': 11
        }
      }
    ];

    const txn = TransactionBuilder.of(Work)
      .setRoot(data)
      .build();

    const people = txn.tree[0].people.get();

    expect(txn.getSetNQuads().length).toEqual(0);

    expect(txn.tree[0].name).toEqual(data[0]['Work.name']);
    expect(people).toHaveLength(2);

    // Has correct facet values.
    expect(txn.tree[0].people.getFacet(people[0])!.salary).toEqual(1200);
    expect(txn.tree[0].people.getFacet(people[0])!.years).toEqual(10);

    expect(txn.tree[0].people.getFacet(people[1])!.salary).toEqual(1201);
    expect(txn.tree[0].people.getFacet(people[1])!.years).toEqual(11);
  });

  it('should create empty predicates for all @Predicate properties if no data', function() {
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
        'Person.name': 'John'
      }
    ];

    const txn = TransactionBuilder.of(Person)
      .setRoot(data)
      .build();

    expect(txn.getSetNQuads().length).toEqual(0);
    expect(txn.tree[0].name).toEqual(data[0]['Person.name']);
    expect(txn.tree[0].friends).not.toBeUndefined();
  });

  it('should handle circulars correctly', function() {
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
        'Person.friends|familiarity': { '0': 9999 },
        'Person.friends': [
          {
            uid: '0x2',
            'Person.name': 'Jane',
            'Person.friends|familiarity': { '0': 9999 },
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

    const txn = TransactionBuilder.of(Person)
      .setRoot(data)
      .build();

    expect(txn.getSetNQuads().length).toEqual(0);
    expect(txn.tree[0].name).toEqual(data[0]['Person.name']);
    expect(txn.tree[0].friends.get()).toHaveLength(1);
    // expect(txn.tree[0].friends.get()[0].name).toEqual(data[0]['Person.friends'][0]['Person.name']);
  });

  it('should be able to handle ', () => {
    @Node()
    class Parent {
      @Uid()
      uid: string;

      @Property()
      name: string;

      @Predicate({ type: () => Parent })
      has_child: IPredicate<Parent>;
    }

    const data = [
      {
        uid: '0x1',
        'Parent.has_child': [
          {
            uid: '0x2',
            'Parent.has_child': [
              {
                uid: '0x3',
                'Parent.has_child': [{ uid: '0x1' }]
              }
            ]
          }
        ] as any[]
      }
    ];

    const resource = [
      {
        uid: '0x1',
        'Parent.name': 'Node 0x1'
      },
      {
        uid: '0x2',
        'Parent.name': 'Node 0x2'
      },
      {
        uid: '0x3',
        'Parent.name': 'Node 0x3'
      }
    ];

    const txn = TransactionBuilder.of(Parent)
      .setRoot(data)
      .addJsonData(resource)
      .build();

    expect(txn.getSetNQuads().length).toEqual(0);
    expect(txn.tree[0].has_child.get()[0].name).toEqual('Node 0x2');

    expect(
      txn.tree[0].has_child
        .get()[0]
        .has_child.get()[0]
        .has_child.get()[0].name
    ).toEqual('Node 0x1');

    expect(
      txn.tree[0].name ===
        txn.tree[0].has_child
          .get()[0]
          .has_child.get()[0]
          .has_child.get()[0].name
    ).toBeTruthy();
  });
});
