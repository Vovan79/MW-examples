import React from 'react';
import {
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
} from '@material-ui/core';
import { ArrowDropDown } from '@material-ui/icons';
import useStyles from './styles';

type Props = {
  order: any,
  orderBy: any,
  onRequestSort: any,
  headcolumns: string[],
  detailsHeader?: boolean,
};
const EnhancedTableHead: React.FC<Props> = ({
  order,
  orderBy,
  onRequestSort,
  headcolumns,
  detailsHeader,
}) => {
  const classes = useStyles();

  const createSortHandler = (property: any) => (event: any) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headcolumns.map((column: any) => (
          column.unsort
            ? (
              <TableCell
                key={column.name}
                className={detailsHeader ? classes.headcellDetails : classes.headcell}
                align="center"
                sortDirection={orderBy === column.name ? order : false}
              >
                {column.label}
              </TableCell>
            )
            : (
              <TableCell
                key={column.name}
                className={detailsHeader ? classes.headcellDetails : classes.headcell}
                align="center"
                sortDirection={orderBy === column.name ? order : false}
              >
                <TableSortLabel
                  active={orderBy === column.name}
                  direction={orderBy === column.name ? order : 'asc'}
                  onClick={createSortHandler(column.name)}
                  style={{ color: (detailsHeader ? '#000' : '#FFF') }}
                  classes={{ icon: (detailsHeader ? classes.sorticonDetails : classes.sorticon) }}
                  IconComponent={ArrowDropDown}
                >
                  {column.label}
                </TableSortLabel>
              </TableCell>
            )
        ))}
      </TableRow>
    </TableHead>
  );
};

export default EnhancedTableHead;
