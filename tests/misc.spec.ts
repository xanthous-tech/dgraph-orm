import { MetadataStorageUtils } from '../src/metadata/storage';
import { Expose, plainToClass } from 'class-transformer';

import { IPredicate, Node, Predicate, Property, PropertyType, TransactionBuilder, Uid } from '../src';

describe('Tests', () => {
  beforeEach(() => MetadataStorageUtils.flush());

  it.skip('should break', () => {
    class Person {
      constructor(public age: number) {
        if (!age) {
          throw 'No age';
        }
      }
    }

    class Party {
      public people: Person[];
    }

    const people = [new Person(21), new Person(27)];
    console.log(people);
    plainToClass(Party, { people });
  });

  it.skip('should not break plainToClass', () => {
    @Node()
    class Person {
      @Uid()
      uid: string;

      @Property({ type: PropertyType.String })
      name: string;

      @Predicate({ type: () => Person })
      friends: IPredicate<Person>;
    }

    class TestClass {
      @Expose()
      person: Person;
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

    plainToClass(TestClass, {
      person: transaction.tree[0]
    });
  });
});
