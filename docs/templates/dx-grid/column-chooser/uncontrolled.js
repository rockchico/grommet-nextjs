/*
import React from 'react';
import {
  Grid,
  Table,
  TableHeaderRow,
  ColumnChooser,
  TableColumnVisibility,
  Toolbar,
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
      rows: generateRows({ length: 6 }),
      defaultHiddenColumnNames: ['sex', 'car'],
    };
  }

  render() {
    const { columns, rows, defaultHiddenColumnNames } = this.state;
    return (
      <Grid
        rows={rows}
        columns={columns}
      >
        <Table />
        <TableHeaderRow />
        <TableColumnVisibility
          defaultHiddenColumnNames={defaultHiddenColumnNames}
        />
        <Toolbar />
        <ColumnChooser />
      </Grid>
    );
  }
}

render(<Demo />);
