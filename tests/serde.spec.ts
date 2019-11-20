import {Facet, Node, Predicate, Uid} from '../src';

import { MetadataStorageUtils } from '../src/metadata/storage';
import { ObjectMapper } from '../src/serialization/mapper';

describe('Serialize deserialize', () => {
  beforeEach(() => MetadataStorageUtils.flush());

  it('should map json to objects correctly', function() {
    @Node()
    class Work {
      @Predicate()
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

      @Predicate()
      name: string;

      @Facet()
      salary: number;
    }

    @Node()
    class Person {
      @Uid()
      id: string;

      @Predicate()
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
            'Person.works|salary': 1200
          }
        ]
      }
    ];

    const instances = ObjectMapper.newBuilder()
      .addEntryType(Person)
      .addJsonData(data)
      .build();

    console.log(JSON.stringify(instances, null, 2));
  });
});
