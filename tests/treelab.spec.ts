import { ObjectMapper } from '../src/serialization/mapper';
import { data } from './treelab/data';
import { Column, ColumnCellTestFacet } from './treelab/column';
import { MutationBuilder } from '../src/mutation/builder';

test('Should work', () => {
  const instances = ObjectMapper.newBuilder<Column>()
    .addEntryType(Column)
    .addJsonData(data.data.allColumnData)
    .build();

  const column = instances[0];
  const cell = column.has_cell.get()[0];

  column.columnType = 'COLUMN_NEW_TYPE';
  cell.cellType = 'TEST_NEW_TYPE';
  column.has_cell.withFacet(new ColumnCellTestFacet('42')).update(cell);

  // Time it.
  console.time('Mutation built time');
  MutationBuilder.getSetNQuadsString(column);
  console.timeEnd('Mutation built time');

  // Render it.
  console.log(MutationBuilder.getSetNQuadsString(column));
});
