import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from 'grommet';
import { StyledTableCell } from './table-cell';

const StyledTreeCell = styled(StyledTableCell)`
    padding-right: ${props => props.theme.global.edgeSize.small};
    padding-left: ${props => props.theme.global.edgeSize.small};
    &:first-child {
      padding-left: ${props => props.theme.global.edgeSize.medium};
    }
    ${props => props.noWrap && 'white-space: nowrap;'}
    ${props => props.alignRight && 'text-align: right;'}
    ${props => props.alignCenter && 'text-align: center;'}
`;

const TableTreeCellBase = ({
  column, value, children,
  tableRow, tableColumn, row,
  ...restProps
}) => (
  <StyledTreeCell
    noWrap={!(tableColumn && tableColumn.wordWrapEnabled)}
    alignRight={tableColumn && tableColumn.align === 'right'}
    alignCenter={tableColumn && tableColumn.align === 'center'}
    {...restProps}
  >
    <Box direction='row' align='center' gap='small'>
      {children}
    </Box>
  </StyledTreeCell>
);

TableTreeCellBase.propTypes = {
  value: PropTypes.any,
  column: PropTypes.object,
  row: PropTypes.any,
  children: PropTypes.node,
  tableRow: PropTypes.object,
  tableColumn: PropTypes.object,
};

TableTreeCellBase.defaultProps = {
  value: undefined,
  column: undefined,
  row: undefined,
  children: undefined,
  tableRow: undefined,
  tableColumn: undefined,
};

export const TableTreeCell = TableTreeCellBase;