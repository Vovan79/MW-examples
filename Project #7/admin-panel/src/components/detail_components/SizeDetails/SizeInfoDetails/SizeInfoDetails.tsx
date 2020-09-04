import React from 'react';
import { Paper, TextField } from '@material-ui/core';
import PaperHeader from '../../../interface_components/PaperHeader';

import useStyles from './styles';

type Props = {
  title: string,
  data: {
    name: string,
    width: string,
    height: string,
  },
  onHandleEntityChange: any,
};

const SizeInfoDetails: React.FC<Props> = ({ title, data, onHandleEntityChange }) => {
  const classes = useStyles();
  const { name, width, height } = data;

  return (
    <Paper className={classes.root}>
      <PaperHeader title={title} />
      <form className={classes.container} noValidate autoComplete="off">
        <div className={classes.row}>
          <TextField
            name="name"
            value={name}
            label="Size name"
            onInput={onHandleEntityChange}
          />
        </div>
        <div className={classes.row}>
          <TextField
            name="width"
            value={width}
            label="Width (mm)"
            onInput={onHandleEntityChange}
          />
        </div>
        <div className={classes.row}>
          <TextField
            name="height"
            value={height}
            label="Height (mm)"
            onInput={onHandleEntityChange}
          />
        </div>
      </form>
    </Paper>
  );
};

export default SizeInfoDetails;
