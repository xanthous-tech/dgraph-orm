import { Node, Predicate, Property, Uid } from '../src';

import { MetadataStorageUtils } from '../src/metadata/storage';
import { ObjectMapper } from '../src/serialization/mapper';
import { MutationBuilder } from '../src/mutation/builder';

describe('Serialize deserialize', () => {
  beforeEach(() => MetadataStorageUtils.flush());

  it('should handle circulars correctly', function() {
    @Node()
    class Hobby {
      @Uid()
      id: string;

      @Property()
      name: string;
    }

    @Node()
    class Person {
      @Uid()
      id: string;

      @Property()
      name: string;

      @Predicate({ type: [Hobby] })
      hobbies: Hobby[];
    }

    const data = [
      {
        uid: '0x1',
        'Person.name': 'John',
        'Person.hobbies': [{ uid: '0x2', 'Hobby.name': 'games' }]
      }
    ];

    const existing = ObjectMapper.newBuilder<Person>()
      .addEntryType(Person)
      .addJsonData(data)
      .build();

    existing[0].name = 'New Name';
    existing[0].hobbies[0].name = 'New Hobby Name';
    console.log(MutationBuilder.getSetNQuadsString(existing[0]));

    const hobby = new Hobby();
    hobby.name = 'Stuff';

    const person = new Person();
    person.name = 'Testing';
    person.hobbies = [hobby];
    console.log(MutationBuilder.getSetNQuadsString(person));
  });

  it('should handle circulars correctly', function() {
    @Node()
    class Person {
      @Uid()
      id: string;

      @Property()
      name: string;

      @Predicate({ type: [Person] })
      friends: Person[];
    }

    const data = [
      {
        uid: '0x1',
        'Person.name': 'John',
        'Person.friends': [
          {
            uid: '0x2',
            'Person.name': 'Jane',
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

    const instances = ObjectMapper.newBuilder<Person>()
      .addEntryType(Person)
      .addJsonData(data)
      .build();

    instances[0].name = 'New John';
    instances[0].friends[0].name = 'New Jane';
    instances[0].friends[0].friends[0].name = 'New Kamil';

    // After New year resolution....
    console.log(MutationBuilder.getSetNQuadsString(instances[0]));

    const john = new Person();
    john.name = 'John';

    const jane = new Person();
    jane.name = 'Jane';

    const kamil = new Person();
    kamil.name = 'Kamil';

    jane.friends = [kamil];
    john.friends = [jane];

    console.log(MutationBuilder.getSetNQuadsString(john));
  });
});
