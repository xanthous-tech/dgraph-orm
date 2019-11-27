import { Facet, Node, Predicate, Property, Uid } from '../src';

import { MetadataStorageUtils } from '../src/metadata/storage';
import { ObjectMapper } from '../src/serialization/mapper';

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

      @Predicate({ type: [Person], facet: PersonWorks })
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
            'Work.people|years': 10
          },
          {
            uid: '0x3',
            'Person.name': 'Jane Doe',
            'Work.people|salary': 1201,
            'Work.people|years': 11
          }
        ]
      }
    ];

    const instances = ObjectMapper.newBuilder<Work>()
      .addEntryType(Work)
      .addJsonData(data)
      .build();

    const people = instances[0].people.get();

    expect(instances[0].name).toEqual(data[0]['Work.name']);
    expect(people).toHaveLength(2);

    // Has correct facet values.
    expect(instances[0].people.getFacet(people[0])).toEqual({ salary: 1200, years: 10 });
    expect(instances[0].people.getFacet(people[1])).toEqual({ salary: 1201, years: 11 });
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

      @Predicate({ type: [Person], facet: PersonKnows })
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
