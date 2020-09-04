import React, { useState } from 'react';
import {
  TableContainer,
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from '@material-ui/core';
import EnhancedTableHead from '../../../../../interface_components/EnhancedTableHead';
import PaginationSection from '../../../../../interface_components/PaginationSection';
import ActionsBlock from '../../../../../interface_components/ActionsBlock';

import { DETAILS_ORDERS_COLUMNS as columns } from '../../../../../../constants/details.constants';
import { DETAILS_ORDERS_DATA as data } from '../../../../../../mock/details.tables.data';
import { getComparator, stableSort } from '../../../../../../helpers/sort.helpers';
import useStyles from './styles';

const UserDetailsOrdersTable: React.FC = () => {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('designId');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const classes = useStyles();

  const handleRequestSort = (event: any, property: any) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <TableContainer className={classes.container} component={Paper}>
        <Table
          stickyHeader
          size="small"
          className={classes.table}
          aria-label="sticky table"
        >
          <EnhancedTableHead
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            headcolumns={columns}
            detailsHeader
          />
          <TableBody>
            {stableSort(data, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row: any) => (

                <TableRow key={row.designId}>
                  <TableCell component="th" scope="row" align="center">{row.designId}</TableCell>
                  <TableCell align="center">{row.printId}</TableCell>
                  <TableCell align="center">{row.title}</TableCell>
                  <TableCell align="center">{row.product}</TableCell>
                  <TableCell align="center">{row.gb}</TableCell>
                  <TableCell align="center">{row.design}</TableCell>
                  <TableCell align="center">{row.print}</TableCell>
                  <TableCell align="center">{row.stock}</TableCell>
                  <TableCell align="center">{row.status}</TableCell>
                  <TableCell align="center">{row.preview}</TableCell>
                  <TableCell align="center"><ActionsBlock id={row.designId} short /></TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <PaginationSection
        count={data.length}
        page={page}
        rowsPerPage={rowsPerPage}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </>
  );
};

export default UserDetailsOrdersTable;
