// @ts-ignore
import * as util from 'util';

import { IPredicate, Node, Predicate, Property, TransactionBuilder, Uid } from '../src';

describe('Performance testing', () => {
  it('mutation string generate', () => {
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

  it.only('Fuzz with random data', () => {
    interface IStation {
      uid: string;
      name: string;
      connects: IStation[];
    }

    @Node()
    // @ts-ignore
    class Station {
      @Uid()
      uid: string;

      @Property({ name: 'name' })
      name: string;

      @Predicate({ name: 'connects', type: () => Station })
      connects: IPredicate<Station>;
    }

    const MIN_DEPTH = 3;
    const CONNECTION_PER_STATION = 2;
    const STATION_COUNT = 50;

    console.time('Data create');
    const allStations: IStation[] = new Array(STATION_COUNT).fill(null).map((_, idx) => ({
      uid: `${idx}`,
      name: `Station_${idx}`,
      connects: [] as any[]
    }));

    new Array(MIN_DEPTH).fill(null).forEach(() => {
      allStations.forEach((station, idx) => {
        new Array(CONNECTION_PER_STATION).fill(null).forEach(() => {
          let rand = Math.floor(Math.random() * STATION_COUNT);
          if (rand !== idx) {
            station.connects.push(allStations[rand]);
          }
        });
      });
    });
    // console.timeEnd('Data create');
    // console.log(util.inspect(allStations, { colors: true, depth: 10, compact: true, breakLength: 200 }));

    console.time('Data clean');
    const tb = TransactionBuilder.of(Station);
    tb.setRoot(allStations);
    console.timeEnd('Data clean');

    // console.time('Map build');
    // tb.build();
    // console.timeEnd('Map build');
    // console.log(util.inspect(result.tree, { colors: true, depth: 20 }));
    // console.log(`Stations ${result.tree[0].name} connects to:\n`, result.tree[0].connects.get());

    // expect(allStations[0].connects[0].connects[0].connects[0].connects[0].connects[0].uid).toEqual(
    //   result.tree[0].connects
    //     .get()[0]
    //     .connects.get()[0]
    //     .connects.get()[0]
    //     .connects.get()[0]
    //     .connects.get()[0].uid
    // );
  });
});
