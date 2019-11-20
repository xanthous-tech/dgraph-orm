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

  it('should map facets correctly', function() {
    @Node()
    class Work {
      @Uid()
      id: string;

      @Property()
      name: string;

      @Facet()
      salary: number;

      @Facet()
      years: number;
    }

    @Node()
    class Person {
      @Uid()
      id: string;

      @Property()
      name: string;

      @Predicate({ type: [Work] })
      works: Work[];
    }

    const data = [
      {
        uid: '0x1',
        'Person.name': 'John Doe',
        'Person.works': [
          {
            uid: '0x2',
            'Work.name': 'Space Engineer',
            'Person.works|salary': 1200,
            'Person.works|years': 10
          }
        ]
      }
    ];

    const instances = ObjectMapper.newBuilder<Person>()
      .addEntryType(Person)
      .addJsonData(data)
      .build();

    expect(instances[0].name).toEqual(data[0]["Person.name"]);
    expect(instances[0].works).toHaveLength(1);
  });

  it('should handle circulars correctly', function() {
    @Node()
    class Person {
      @Uid()
      id: string;

      @Property()
      name: string;

      @Facet()
      familiarity: number;

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
            'Person.friends|familiarity': 9999,
            'Person.name': 'Jane'
          }
        ]
      }
    ];

    const instances = ObjectMapper.newBuilder<Person>()
      .addEntryType(Person)
      .addJsonData(data)
      .build();

    expect(instances[0].name).toEqual(data[0]["Person.name"]);
    expect(instances[0].friends).toHaveLength(1);
    expect(instances[0].friends[0].name).toEqual(data[0]["Person.friends"][0]["Person.name"])
  });
});
