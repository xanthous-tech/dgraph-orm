import {Facet, Node, Predicate, Property, Uid} from '../src';

import { MetadataStorageUtils } from '../src/metadata/storage';
import { ObjectMapper } from '../src/serialization/mapper';
import { MutationBuilder } from '../src/mutation/builder';
import {WithFacet} from "../src/decorator/with-facet";

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
    @Facet()
    class PersonKnows {
      familiarity: number;
    }

    @Node()
    class Person {
      @Uid()
      id: string;

      @Property()
      name: string;

      @WithFacet(PersonKnows)
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

    const instances = ObjectMapper.newBuilder<Person>()
      .addEntryType(Person)
      .addJsonData(data)
      .build();

    instances[0].name = 'New John';
    instances[0].friends[0].name = 'New Jane';
    instances[0].friends[0].familiarity = 99;
    instances[0].friends[0].friends[0].name = 'New Kamil';

    // After New year resolution....
    console.log(MutationBuilder.getSetNQuadsString(instances[0]));

    const john = new Person();
    john.name = 'John';

    const jane = new Person();
    jane.name = 'Jane';
    jane.familiarity = 99;

    const kamil = new Person();
    kamil.name = 'Kamil';
    kamil.familiarity = 42;

    jane.friends = [kamil];
    john.friends = [jane];

    console.log(MutationBuilder.getSetNQuadsString(john));
  });

  it.only('should be able to handle reverse edges', function() {
    @Node()
    class Person {
      @Uid()
      id: string;

      @Property()
      name: string;

      @Predicate({ type: [Person] })
      friends: Person[];
    }

    const lola = new Person();
    lola.name = 'Lola';

    const john = new Person();
    john.name = 'John';

    const jane = new Person();
    jane.name = 'Jane';

    const kamil = new Person();
    kamil.name = 'Kamil';

    john.friends = [jane, lola];
    jane.friends = [kamil, lola];
    kamil.friends = [john, lola];
    lola.friends = [jane, kamil, john];

    console.log(MutationBuilder.getSetNQuadsString(john));
    console.log(MutationBuilder.getSetNQuadsString(lola));
  });
});