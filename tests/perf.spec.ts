import { IPredicate, Node, Predicate, TransactionBuilder, Uid } from '../src';

it('performance Testing', () => {
  @Node()
  class Cell {
    @Uid()
    uid: string;

    @Predicate({ name: 'from_row', type: () => Row })
    fromRow: IPredicate<Row>;

    @Predicate({ name: 'from_column', type: () => Column })
    fromColumn: IPredicate<Column>;
  }

  @Node()
  class Row {
    @Uid()
    uid: string;

    @Predicate({ name: 'has_cell', type: () => Cell })
    hasCell: IPredicate<Cell>;
  }

  @Node()
  class Column {
    @Uid()
    uid: string;

    @Predicate({ name: 'has_cell', type: () => Cell })
    hasCell: IPredicate<Cell>;
  }

  const transaction = TransactionBuilder.build();

  const column = transaction.nodeFor(Column);

  const times = 1000;

  let i = 0;
  while (i++ < times) {
    const cell = transaction.nodeFor(Cell);
    const row = transaction.nodeFor(Row);

    cell.fromRow.add(row);
    cell.fromColumn.add(column);

    row.hasCell.add(cell);
    column.hasCell.add(cell);
  }

  console.time('Initial');
  transaction.getSetNQuadsString();
  console.timeEnd('Initial');

  const transaction2 = TransactionBuilder.build();
  const column2 = transaction2.nodeFor(Column);

  i = 0;
  while (i++ < times) {
    const cell2 = transaction2.nodeFor(Cell);
    const row2 = transaction2.nodeFor(Row);

    cell2.fromRow.add(row2);
    cell2.fromColumn.add(column2);

    row2.hasCell.add(cell2);
    column2.hasCell.add(cell2);
  }

  console.time('Second');
  transaction2.getSetNQuadsString();
  console.timeEnd('Second');
});
