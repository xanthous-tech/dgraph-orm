import { ObjectMapper } from '../src/serialization/mapper';
import { MutationBuilder } from '../src/mutation/builder';
import { SchemaBuilder } from '../src';

import { data } from './treelab/data';
import { Column, ColumnCellTestFacet } from './treelab/column';

test('Should build correct schema', () => {
  console.log(SchemaBuilder.build());
});

test('Should work', () => {
  console.time('Object built time');
  const instances = ObjectMapper.newBuilder<Column>()
    .addEntryType(Column)
    .addJsonData(data.data.allColumnData)
    .build();
  console.timeEnd('Object built time');

  const column = instances[0];
  const cell = column.hasCell.get()[0];

  column.columnType = 'COLUMN_NEW_TYPE';
  cell.cellType = 'TEST_NEW_TYPE';
  column.hasCell.withFacet(new ColumnCellTestFacet('42')).update(cell);

  // Time it.
  console.time('Mutation built time');
  MutationBuilder.getSetNQuadsString(column);
  console.timeEnd('Mutation built time');

  // Render it.
  console.log('Yes facet');
  console.log(MutationBuilder.getSetNQuadsString(column));

  // Remove the facet
  column.hasCell.withFacet(null).update(cell);

  // Render it again without the facet part.
  console.log('No facet');
  console.log(MutationBuilder.getSetNQuadsString(column));
});
