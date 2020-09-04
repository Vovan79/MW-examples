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

import { DETAILS_LOGOS_COLUMNS as columns } from '../../../../../../constants/details.constants';
import { getComparator, stableSort } from '../../../../../../helpers/sort.helpers';
import useStyles from './styles';

type Props = {
  userLogos: any[],
};
const UserDetailsLogosTable: React.FC<Props> = ({ userLogos }) => {
  const [logos, setLogos] = useState(userLogos);

  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('designId');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const classes = useStyles();

  userLogos.forEach((userLogo: any, index: number) => {
    const logo = new Image();
    logo.onload = () => {
      const newLogo = { ...userLogo, ...{ width: logo.width, height: logo.height } };
      logos[index] = newLogo;
      setLogos(logos.slice());
    };
    logo.src = userLogo.link;
  });

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
            {stableSort(logos, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row: any) => (

                <TableRow key={row.id}>
                  <TableCell component="th" scope="row" align="center">{row.id}</TableCell>
                  <TableCell align="center">
                    {(row.width && row.height) ? `${row.width}px x ${row.height}px` : ''}
                  </TableCell>
                  <TableCell align="center">{(row.size * 1024).toFixed(3)}</TableCell>
                  <TableCell align="center">
                    <img
                      className={classes.preview}
                      src={row.link}
                      alt=""
                    />
                  </TableCell>
                  <TableCell align="center"><ActionsBlock id={row.id} short userTable /></TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <PaginationSection
        count={logos.length}
        page={page}
        rowsPerPage={rowsPerPage}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </>
  );
};

export default UserDetailsLogosTable;
