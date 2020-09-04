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

import { PLANS_COLUMNS as columns } from '../../../constants/columns.constants';
import { getComparator, stableSort } from '../../../helpers/sort.helpers';
import { setDetailMode } from '../../../redux/modules/mode/actions';
import { getPlansRequest, clearPlansDataState } from '../../../redux/modules/plans/actions';
import { DETAIL_MODE } from '../../../redux/modules/mode/types';
import useStyles from '../styles';

type Props = {
  title: string,
};

const PlansTable: React.FC<Props> = ({ title }) => {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('id');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const classes = useStyles();
  const dispatch = useDispatch();

  const category = useSelector((state: AppState) => state.leftSidebar.selectedMenu);
  const plansData = useSelector((state: AppState) => state.plansData.plans);

  useEffect(() => {
    dispatch(getPlansRequest());
  }, [dispatch]);

  useEffect(() => () => {
    dispatch(clearPlansDataState());
  }, [dispatch]);

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
          aria-label="sticky table"
        >
          <EnhancedTableHead
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            headcolumns={columns}
          />
          <TableBody>
            {stableSort(plansData, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row: any) => (

                <TableRow className={classes.row} key={row.id} onDoubleClick={() => handleShowDetails(row.id)}>
                  <TableCell component="th" scope="row" align="center">{row.id}</TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.size}</TableCell>
                  <TableCell align="center">{row.price}</TableCell>
                  <TableCell align="center"><ActionsBlock id={row.id} short /></TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <PaginationSection
        count={plansData.length}
        page={page}
        rowsPerPage={rowsPerPage}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </>
  );
};

export default PlansTable;
