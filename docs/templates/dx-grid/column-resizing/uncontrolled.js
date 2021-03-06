/*
import React from 'react';
import {
  Grid,
  Table,
  TableHeaderRow,
  TableColumnResizing,
} from 'dx-react-grid-grommet';

import { generateRows } from '../../../data/dx-grid-data/generator';
*/

class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { name: 'name', title: 'Name' },
        { name: 'sex', title: 'Sex' },
        { name: 'city', title: 'City' },
        { name: 'car', title: 'Car' },
      ],
      defaultColumnWidths: [
        { columnName: 'name', width: 180 },
        { columnName: 'sex', width: 180 },
        { columnName: 'city', width: 180 },
        { columnName: 'car', width: 240 },
      ],
      rows: generateRows({ length: 6 }),
    };
  }

  render() {
    const { rows, columns, defaultColumnWidths } = this.state;

    return (
      <Grid
        rows={rows}
        columns={columns}
      >
        <Table />
        <TableColumnResizing defaultColumnWidths={defaultColumnWidths} />
        <TableHeaderRow />
      </Grid>
    );
  }
}

render(<Demo />);
