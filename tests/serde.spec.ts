import { Facet, Node, Predicate, Property, Uid } from '../src';

import { MetadataStorageUtils } from '../src/metadata/storage';
import { ObjectMapper } from '../src/serialization/mapper';
import { WithFacet } from '../src/decorator/with-facet';

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

    const instances = ObjectMapper.newBuilder()
      .addEntryType(Work)
      .addJsonData(data)
      .build();

    const work = instances[0];
    expect(work.name).toEqual(data[0]['Work.name']);
  });

  it('should map withFacets correctly', function() {
    @Facet()
    class PersonWorks {
      salary: number;
      years: number;
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

      @WithFacet(PersonWorks)
      @Predicate({ type: [Person] })
      people: Predicate<Person, PersonWorks>;
    }

    const data = [
      {
        uid: '0x2',
        'Work.name': 'Space Engineer',
        'Work.people': [
          {
            uid: '0x1',
            'Person.name': 'John Doe',
            'Work.people|salary': 1200,
            'Work.people|years': 10,
          }
        ]
      }
    ];

    const instances = ObjectMapper.newBuilder<Work>()
      .addEntryType(Work)
      .addJsonData(data)
      .build();

    console.log(
      instances[0].people.get().forEach(w => {
        console.log(w);
        console.log(instances[0].people);
        console.log(instances[0].people.getFacet(w));
      })
    );

    expect(instances[0].name).toEqual(data[0]['Work.name']);
    expect(instances[0].people.get()).toHaveLength(1);
    expect(instances[0].people.getFacet(instances[0].people.get()[0]))
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
      friends: Predicate<Person, PersonKnows>;
    }

    const data = [
      {
        uid: '0x1',
        'Person.name': 'John',
        'Person.friends': [
          {
            uid: '0x2',
            'Person.friends|familiarity': 9999,
            'Person.name': 'Jane',
            'Person.friends': [
              {
                uid: '0x3',
                'Person.friends|familiarity': 9999,
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

    expect(instances[0].name).toEqual(data[0]['Person.name']);
    expect(instances[0].friends.get()).toHaveLength(1);
    expect(instances[0].friends.get()[0].name).toEqual(data[0]['Person.friends'][0]['Person.name']);
  });
});
