import { Node, Predicate, Property, Uid, Facet } from '../../src';
import { Cell } from './cell';

export class ColumnCellTestFacet {
  constructor(value: string) {
    this.value = value;
  }

  @Facet()
  value: string;
}

@Node()
export class Column {
  @Uid()
  id: string;

  @Property({ name: 'name' })
  name: string;

  @Property({ name: 'columnType' })
  columnType: string;

  @Property({ name: 'isDefault' })
  isDefault: boolean;

  @Predicate({ name: 'has_rollup_update', type: () => Column })
  has_rollup_update: Predicate<Column>;

  @Predicate({ name: 'has_lookup_update', type: () => Column })
  has_lookup_update: Predicate<Column>;

  @Predicate({ name: 'from_formula_column', type: () => Column })
  from_formula_column: Predicate<Column>;

  @Predicate({ name: 'has_cell', type: () => Cell, facet: ColumnCellTestFacet })
  hasCell: Predicate<Cell, ColumnCellTestFacet>;
}
