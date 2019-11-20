import { Node, Predicate } from '../src';
import { ObjectMapper } from '../src/serialization/mapper';

describe('Serialize deserialize', () => {
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
});
