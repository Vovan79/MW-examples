import React from 'react';
import { Paper, TextField, MenuItem } from '@material-ui/core';
import PaperHeader from '../../../interface_components/PaperHeader';
import { CategoryData } from '../../../../redux/modules/categories/types';
import useStyles from './styles';

type Props = {
  title: string,
  data: {
    name: string,
    categoryId: string,
    order: string,
  },
  categories: CategoryData[],
  onHandleEntityChange: any,
};

const ProductInfoDetails: React.FC<Props> = ({
  title,
  data,
  categories,
  onHandleEntityChange,
}) => {
  const classes = useStyles();
  const { name, categoryId, order } = data;

  return (
    <Paper className={classes.root}>
      <PaperHeader title={title} />
      <form className={classes.container} noValidate autoComplete="off">
        <div className={classes.row}>
          <TextField
            name="name"
            value={name}
            label="Product name"
            onInput={onHandleEntityChange}
          />
        </div>
        <div className={classes.row}>
          <TextField
            select
            SelectProps={{ classes: { root: classes.select } }}
            name="categoryId"
            value={categoryId}
            label="Category"
            onChange={onHandleEntityChange}
          >
            {
              categories
                ? categories.map((item: CategoryData) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.name}
                  </MenuItem>
                ))
                : []
            }
          </TextField>
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

export default ProductInfoDetails;
