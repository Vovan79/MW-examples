import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  TableContainer,
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from '@material-ui/core';

import { AppState } from '../../../../../../redux/store';
import EnhancedTableHead from '../../../../../interface_components/EnhancedTableHead';
import PaginationSection from '../../../../../interface_components/PaginationSection';
import ActionsBlock from '../../../../../interface_components/ActionsBlock';

import { DETAILS_FONTS_COLUMNS as columns } from '../../../../../../constants/details.constants';
import { getComparator, stableSort } from '../../../../../../helpers/sort.helpers';
import {
  connectFonts,
} from '../../../../../../redux/modules/fonts/actions';
import { fontsInfoType } from '../../../../../../redux/modules/fonts/selectors';
import { FONT } from '../../../../../../constants/tables.constants';
import getFontNameById from '../../../../../../helpers/connect-font.helper';
import useStyles from './styles';

type Props = {
  userFonts: fontsInfoType,
};
const UserDetailsFontsTable: React.FC<Props> = ({ userFonts }) => {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('designId');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const classes = useStyles();
  const dispatch = useDispatch();

  const fontsData = useSelector((state: AppState) => state.fontsData.fonts);

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

  useEffect(() => {
    if (fontsData && fontsData.length) {
      dispatch(connectFonts(fontsData));
    }
  });

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
            {stableSort(userFonts, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row: any) => (

                <TableRow key={row.id}>
                  <TableCell component="th" scope="row" align="center">{row.id}</TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.category.name ? row.category.name : ''}</TableCell>
                  <TableCell align="center">
                    <span style={{ fontFamily: getFontNameById(fontsData, row.id) }}>
                      Sample
                    </span>
                  </TableCell>
                  <TableCell align="center"><ActionsBlock id={row.id} short font={FONT} userTable /></TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <PaginationSection
        count={userFonts.length}
        page={page}
        rowsPerPage={rowsPerPage}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </>
  );
};

export default UserDetailsFontsTable;
