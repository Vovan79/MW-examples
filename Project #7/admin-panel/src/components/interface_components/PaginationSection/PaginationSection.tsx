import React from 'react';
import { TablePagination } from '@material-ui/core';
import useStyles from './styles';

type Props = {
  count: number,
  page: number,
  rowsPerPage: number,
  onChangePage: any,
  onChangeRowsPerPage: any,
};

const PaginationSection: React.FC<Props> = ({
  count,
  page,
  rowsPerPage,
  onChangePage,
  onChangeRowsPerPage,
}) => {
  const classes = useStyles();

  return (
    <TablePagination
      rowsPerPageOptions={[10, 25, 50, { label: 'All', value: 999999 }]}
      component="div"
      style={{ backgroundColor: '#fff' }}
      classes={{ spacer: classes.pagination }}
      count={count}
      rowsPerPage={rowsPerPage}
      page={page}
      SelectProps={{
        inputProps: { 'aria-label': 'rows per page' },
        native: true,
      }}
      onChangePage={onChangePage}
      onChangeRowsPerPage={onChangeRowsPerPage}
    />
  );
};

export default PaginationSection;
