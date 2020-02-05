import { Node, Predicate, IPredicate, Property, Uid } from '../../src';
import { Column } from './column';

@Node()
export class Cell {
  @Uid()
  id: string;

  @Property({ name: 'cellType' })
  cellType: string;

  @Property({ name: 'isDefault' })
  isDefault: boolean;

  @Property({ name: 'text' })
  text: string;

  @Property({ name: 'rowId' })
  rowId: string;

  @Property({ name: 'columnId' })
  columnId: string;

  @Predicate({ name: 'from_column', type: () => Column })
  from_column: IPredicate<Column>;
}
