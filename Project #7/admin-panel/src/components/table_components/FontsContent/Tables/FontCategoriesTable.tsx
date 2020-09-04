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
import EnhancedTableHead from '../../../interface_components/EnhancedTableHead';
import TableHeader from '../../../interface_components/TableHeader';
import PaginationSection from '../../../interface_components/PaginationSection';
import ActionsBlock from '../../../interface_components/ActionsBlock';
import { AppState } from '../../../../redux/store';

import { FONT_CATEGORIES_COLUMNS as columns } from '../../../../constants/columns.constants';
import { FONT_CATEGORIES } from '../../../../constants/tables.constants';
import { getComparator, stableSort } from '../../../../helpers/sort.helpers';
import { setDetailMode } from '../../../../redux/modules/mode/actions';
import {
  getFontCategoriesRequest,
  clearFontCategoriesDataState,
} from '../../../../redux/modules/fontcategories/actions';
import { DETAIL_MODE } from '../../../../redux/modules/mode/types';
import useStyles from '../styles';

type Props = {
  title: string,
};

const FontCategoriesTable: React.FC<Props> = ({ title }) => {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('id');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const classes = useStyles();
  const dispatch = useDispatch();

  const fontCategoriesData = useSelector((state: AppState) => state.fontCategoriesData.fontcategories);

  useEffect(() => {
    dispatch(getFontCategoriesRequest());
  }, [dispatch]);

  useEffect(() => () => {
    dispatch(clearFontCategoriesDataState());
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
      category: FONT_CATEGORIES,
      id,
    };
    dispatch(setDetailMode(modePayload));
  };

  return (
    <div className={classes.container}>
      <TableHeader title={title} font={FONT_CATEGORIES} />
      <TableContainer component={Paper}>
        <Table
          stickyHeader
          size="small"
          aria-label="sticky table"
        >
          <EnhancedTableHead
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            headcolumns={columns}
          />
          <TableBody>
            {stableSort(fontCategoriesData, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row: any) => (

                <TableRow className={classes.row} key={row.id} onDoubleClick={() => handleShowDetails(row.id)}>
                  <TableCell
                    classes={{ root: classes.id }}
                    component="th"
                    scope="row"
                    align="center"
                  >
                    {row.id}
                  </TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.order}</TableCell>
                  <TableCell
                    classes={{ root: classes.actions }}
                    align="center"
                  >
                    <ActionsBlock id={row.id} font={FONT_CATEGORIES} short />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <PaginationSection
        count={fontCategoriesData.length}
        page={page}
        rowsPerPage={rowsPerPage}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default FontCategoriesTable;
