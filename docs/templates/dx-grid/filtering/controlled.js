/*
import React from 'react';
import {
  FilteringState,
  IntegratedFiltering,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  TableFilterRow,
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
      rows: generateRows({ length: 8 }),
      filters: [{ columnName: 'car', value: 'cruze' }],
    };

    this.changeFilters = filters => this.setState({ filters });
  }

  render() {
    const { rows, columns, filters } = this.state;

    return (
      <Grid
        rows={rows}
        columns={columns}
      >
        <FilteringState
          filters={filters}
          onFiltersChange={this.changeFilters}
        />
        <IntegratedFiltering />
        <Table />
        <TableHeaderRow />
        <TableFilterRow />
      </Grid>
    );
  }
}

render(<Demo />);
