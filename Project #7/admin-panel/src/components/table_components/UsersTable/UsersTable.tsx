import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  TableContainer,
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from '@material-ui/core';
import EnhancedTableHead from '../../interface_components/EnhancedTableHead';
import TableHeader from '../../interface_components/TableHeader';
import PaginationSection from '../../interface_components/PaginationSection';
import ActionsBlock from '../../interface_components/ActionsBlock';
import { AppState } from '../../../redux/store';

import { USERS_COLUMNS as columns } from '../../../constants/columns.constants';
import { getPersonsRequest, clearPersonsDataState } from '../../../redux/modules/persons/actions';
import { getComparator, stableSort } from '../../../helpers/sort.helpers';
import { setDetailMode } from '../../../redux/modules/mode/actions';
import { DETAIL_MODE } from '../../../redux/modules/mode/types';
import useStyles from '../styles';

type Props = {
  role: string,
  title: string,
};

const UsersTable: React.FC<Props> = ({ title, role }) => {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('id');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const classes = useStyles();
  const personsData = useSelector((state: AppState) => state.personsData.persons);
  const category = useSelector((state: AppState) => state.leftSidebar.selectedMenu);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPersonsRequest(role));
  }, [dispatch, role]);

  useEffect(() => () => {
    dispatch(clearPersonsDataState());
  }, [dispatch]);

  const handleRequestSort = (event: any, property: any) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleShowDetails = (id: number) => {
    const modePayload = {
      mode: DETAIL_MODE,
      category,
      id,
    };
    dispatch(setDetailMode(modePayload));
  };

  return (
    <>
      <TableHeader title={title} />
      <TableContainer className={classes.container} component={Paper}>
        <Table
          stickyHeader
          size="small"
          className={classes.table}
          aria-label="enhanced table"
        >
          <EnhancedTableHead
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            headcolumns={columns}
          />
          <TableBody>
            {stableSort(personsData, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row: any) => (
                <TableRow className={classes.row} key={row.id} onDoubleClick={() => handleShowDetails(row.id)}>
                  <TableCell component="th" scope="row" align="center">{row.id}</TableCell>
                  <TableCell align="center">{row.createdAt.substr(0, 10)}</TableCell>
                  <TableCell align="center">{`${row.firstname} ${row.lastname}`}</TableCell>
                  <TableCell align="center">{row.businessname ? row.businessname : ''}</TableCell>
                  <TableCell align="center">{row.designs && row.designs.length ? row.designs.length : 0}</TableCell>
                  <TableCell align="center">{row.orders && row.orders.length ? row.orders.length : 0}</TableCell>
                  <TableCell align="center">{row.plan && row.plan.length ? row.plan.length : 0}</TableCell>
                  <TableCell align="center">{row.spaceused ? row.spaceused : ''}</TableCell>
                  <TableCell align="center">{row.revenue ? row.revenue : ''}</TableCell>
                  <TableCell align="center"><ActionsBlock id={row.id} /></TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <PaginationSection
        count={personsData.length}
        page={page}
        rowsPerPage={rowsPerPage}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </>
  );
};

export default UsersTable;
