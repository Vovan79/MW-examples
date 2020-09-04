import React from 'react';
import { Paper, TextField, MenuItem } from '@material-ui/core';
import PaperHeader from '../../../interface_components/PaperHeader';
import { PLAN_SIZES_ARR as planSizes } from '../../../../constants/details.constants';
import useStyles from './styles';

type Props = {
  title: string,
  data: {
    name: string,
    size: string,
    price: string,
  },
  onHandleEntityChange: any,
};

const PlanInfoDetails: React.FC<Props> = ({ title, data, onHandleEntityChange }) => {
  const classes = useStyles();
  const { name, size, price } = data;

  return (
    <Paper className={classes.root}>
      <PaperHeader title={title} />
      <form className={classes.container} noValidate autoComplete="off">
        <div className={classes.row}>
          <TextField
            name="name"
            value={name}
            label="Plan name"
            onInput={onHandleEntityChange}
          />
        </div>
        <div className={classes.row}>
          <TextField
            select
            SelectProps={{ classes: { root: classes.select } }}
            name="size"
            value={size}
            label="GB Size"
            onChange={onHandleEntityChange}
          >
            {
              planSizes.map((item: string) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))
            }
          </TextField>
        </div>
        <div className={classes.row}>
          <TextField
            name="price"
            value={price}
            label="Cost per month ($)"
            onInput={onHandleEntityChange}
          />
        </div>
      </form>
    </Paper>
  );
};

export default PlanInfoDetails;
