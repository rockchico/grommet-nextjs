/*
import React from 'react';
import {
  Grid,
  Table,
  TableHeaderRow,
} from 'dx-react-grid-grommet';

import {
  generateRows,
  globalSalesValues,
} from '../../../data/dx-grid-data/generator';
*/

class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { name: 'region', title: 'Region' },
        { name: 'sector', title: 'Sector' },
        { name: 'customer', title: 'Customer' },
        { name: 'product', title: 'Product' },
        { name: 'amount', title: 'Sale Amount' },
      ],
      rows: generateRows({ columnValues: globalSalesValues, length: 8 }),
      tableColumnExtensions: [
        { columnName: 'region', width: 180 },
        { columnName: 'sector', width: 130 },
        { columnName: 'customer', width: 240 },
        { columnName: 'product', width: 210 },
        { columnName: 'amount', width: 140 },
      ],
    };
  }

  render() {
    const { rows, columns, tableColumnExtensions } = this.state;

    return (
      <Grid
        rows={rows}
        columns={columns}
      >
        <Table columnExtensions={tableColumnExtensions} />
        <TableHeaderRow />
      </Grid>
    );
  }
}

render(<Demo />);
