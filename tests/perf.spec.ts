import { IPredicate, Node, Predicate, Uid, MutationBuilder } from '../src';

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

    const column = new Column();

    let first20 = 0;
    let last20 = 0;
    let time = 0;
    const times = 1000;

    let i = 0;
    while (i++ < times) {
        const cell = new Cell();
        const row = new Row();

        cell.fromRow.add(row);
        cell.fromColumn.add(column);

        row.hasCell.add(cell);
        column.hasCell.add(cell);
    }

    i = 0;
    while (i++ < times) {
        const _time1 = Date.now();
        MutationBuilder.getSetNQuadsString(column);

        const _time2 = Date.now();
        time += _time2 - _time1;
        if (i < 21) {
            first20 += _time2 - _time1;
        }
        if (i > times - 20) {
            last20 += _time2 - _time1;
        }
    }

    console.log('duration: ', time);
    console.log('avg: ', time / times);
    console.log(`first 20: ${first20}, avg: ${first20 / 20}`);
    console.log(`last 20: ${last20}, avg: ${last20 / 20}`);

    const column2 = new Column();

    i = 0;
    while (i++ < 200) {
        const cell2 = new Cell();
        const row2 = new Row();

        cell2.fromRow.add(row2);
        cell2.fromColumn.add(column2);

        row2.hasCell.add(cell2);
        column2.hasCell.add(cell2);
    }

    console.time('Fresh');
    MutationBuilder.getSetNQuadsString(column2);
    console.timeEnd('Fresh');
});
