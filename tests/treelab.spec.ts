import { ObjectMapper } from '../src/serialization/mapper';
import { data } from './treelab/data';
import { Column } from './treelab/column';
import { MutationBuilder } from '../src/mutation/builder';

test('Should work', () => {
  const instances = ObjectMapper.newBuilder<Column>()
    .addEntryType(Column)
    .addJsonData(data.data.allColumnData)
    .build();

  const column = instances[0];
  column.columnType = 'COLUMN_NEW_TYPE';

  console.time('Mutation built time');
  MutationBuilder.getSetNQuadsString(column);
  console.timeEnd('Mutation built time');

  console.log(MutationBuilder.getSetNQuadsString(column));
});
