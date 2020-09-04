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

import { SVG_CATEGORIES_COLUMNS as columns } from '../../../../constants/columns.constants';
import { TABLE_TITLE } from '../../../../constants/tables.constants';
import { getComparator, stableSort } from '../../../../helpers/sort.helpers';
import { setDetailMode } from '../../../../redux/modules/mode/actions';
import {
  getSVGCategoriesRequest,
  clearSVGCategoriesDataState,
} from '../../../../redux/modules/svgcategories/actions';
import { DETAIL_MODE } from '../../../../redux/modules/mode/types';
import useStyles from '../styles';

const SVGCategoriesTable: React.FC = () => {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('id');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const classes = useStyles();
  const dispatch = useDispatch();

  const svgType = useSelector((state: AppState) => state.modeData.category);
  const svgCategoriesData = useSelector((state: AppState) => state.svgCategoriesData.svgcategories);

  useEffect(() => {
    if (svgType) {
      dispatch(getSVGCategoriesRequest(svgType));
    }
  }, [dispatch, svgType]);

  useEffect(() => () => {
    dispatch(clearSVGCategoriesDataState());
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
      category: svgType,
      id,
    };
    dispatch(setDetailMode(modePayload));
  };

  return (
    <div className={classes.category_container}>
      {svgType && (
      <>
        <TableHeader
          title={svgType === 'svg_icon' ? TABLE_TITLE.svg_icon_category : TABLE_TITLE.svg_shape_category}
          svg={svgType}
        />
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
              {stableSort(svgCategoriesData, getComparator(order, orderBy))
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
                      <ActionsBlock id={row.id} svg={svgType} short />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <PaginationSection
          count={svgCategoriesData.length}
          page={page}
          rowsPerPage={rowsPerPage}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </>
      )}
    </div>
  );
};

export default SVGCategoriesTable;
