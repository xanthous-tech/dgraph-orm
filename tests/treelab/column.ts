import { Node, Predicate, IPredicate, Property, Uid, Facet } from '../../src';
import { Cell } from './cell';

export class ColumnCellTestFacet {
  constructor(value: string) {
    this.value = value;
    this.something = value;
  }

  @Facet()
  value: string;

  @Facet()
  something: string;
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
  has_rollup_update: IPredicate<Column>;

  @Predicate({ name: 'has_lookup_update', type: () => Column })
  has_lookup_update: IPredicate<Column>;

  @Predicate({ name: 'from_formula_column', type: () => Column })
  from_formula_column: IPredicate<Column>;

  @Predicate({ name: 'has_cell', type: () => Cell, facet: ColumnCellTestFacet })
  hasCell: IPredicate<Cell, ColumnCellTestFacet>;
}
