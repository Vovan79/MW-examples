import React from 'react';
import { Paper, TextField } from '@material-ui/core';
import PaperHeader from '../../../interface_components/PaperHeader';
import useStyles from './styles';

type Props = {
  title: string,
  type: string,
  data: {
    name: string,
    order: string,
  },
  onHandleEntityChange: any,
};

const SVGCategoryInfoDetails: React.FC<Props> = ({
  title,
  type,
  data,
  onHandleEntityChange,
}) => {
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
            label={type === 'svg_icon' ? 'SVG Icon category name' : 'SVG Shape category name'}
            onInput={onHandleEntityChange}
          />
        </div>
        <div className={classes.row}>
          <TextField
            name="order"
            value={order}
            label="Order"
            onInput={onHandleEntityChange}
          />
        </div>
      </form>
    </Paper>
  );
};

export default SVGCategoryInfoDetails;
