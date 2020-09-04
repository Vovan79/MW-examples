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
import { DETAILS_SVGS_COLUMNS as columns } from '../../../../../../constants/details.constants';
import { getComparator, stableSort } from '../../../../../../helpers/sort.helpers';
import useStyles from './styles';

type Props = {
  userSVGs: any,
};
const UserDetailsSVGsTable: React.FC<Props> = ({ userSVGs }) => {
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
            {stableSort(userSVGs, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row: any) => (

                <TableRow key={row.id}>
                  <TableCell component="th" scope="row" align="center">{row.id}</TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.order}</TableCell>
                  <TableCell align="center">{`$${row.cost}`}</TableCell>
                  <TableCell align="center">
                    <object data={row.link} type="image/svg+xml" width="30" height="22">
                      SVG
                    </object>
                  </TableCell>
                  <TableCell align="center"><ActionsBlock id={row.id} short svg="svg_icon_file" userTable /></TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <PaginationSection
        count={userSVGs.length}
        page={page}
        rowsPerPage={rowsPerPage}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </>
  );
};

export default UserDetailsSVGsTable;
