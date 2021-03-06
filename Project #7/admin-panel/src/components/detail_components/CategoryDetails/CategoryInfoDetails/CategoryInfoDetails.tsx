import React from 'react';
import { Paper, TextField } from '@material-ui/core';
import PaperHeader from '../../../interface_components/PaperHeader';

import useStyles from './styles';

type Props = {
  title: string,
  data: {
    name: string,
    order: string,
  },
  onHandleEntityChange: any,
};

const CategoryInfoDetails: React.FC<Props> = ({ title, data, onHandleEntityChange }) => {
  const classes = useStyles();
  const { name, order } = data;

  return (
    <Paper className={classes.root}>
      <PaperHeader title={title} />
      <form className={classes.container} noValidate autoComplete="off">
        <div className={classes.row}>
          <TextField
            name="name"
            value={name}
            label="Category name"
            onInput={onHandleEntityChange}
          />
        </div>
        <div className={classes.row}>
          <TextField
            name="order"
            value={order}
            label="Order in list"
            onInput={onHandleEntityChange}
          />
        </div>
      </form>
    </Paper>
  );
};

export default CategoryInfoDetails;
