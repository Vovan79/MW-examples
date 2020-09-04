import React from 'react';
import { Paper, TextField, Typography } from '@material-ui/core';
import PaperHeader from '../../../interface_components/PaperHeader';

import { Columns, Margins } from '../../../../redux/modules/sizes/types';
import useStyles from './styles';

type Props = {
  title: string,
  marginData: Margins,
  columnData: Columns,
  onHandleMarginChange: any,
  onHandleColumnChange: any,
};

const SizeSetupDetails: React.FC<Props> = ({
  title,
  marginData,
  columnData,
  onHandleMarginChange,
  onHandleColumnChange,
}) => {
  const classes = useStyles();
  const {
    top,
    bottom,
    left,
    right,
  } = marginData;
  const { number, gutter } = columnData;

  return (
    <Paper className={classes.root}>
      <PaperHeader title={title} />
      <form className={classes.container} noValidate autoComplete="off">
        <Typography className={classes.title}>
          Margins
        </Typography>
        <div className={classes.row}>
          <TextField
            name="top"
            value={top}
            label="Top (mm)"
            onInput={onHandleMarginChange}
          />
        </div>
        <div className={classes.row}>
          <TextField
            name="bottom"
            value={bottom}
            label="Bottom (mm)"
            onInput={onHandleMarginChange}
          />
        </div>
        <div className={classes.row}>
          <TextField
            name="left"
            value={left}
            label="Left (mm)"
            onInput={onHandleMarginChange}
          />
        </div>
        <div className={classes.row}>
          <TextField
            name="right"
            value={right}
            label="Right (mm)"
            onInput={onHandleMarginChange}
          />
        </div>
        <Typography className={classes.title}>
          Columns
        </Typography>
        <div className={classes.row}>
          <TextField
            name="number"
            value={number}
            label="Number"
            onInput={onHandleColumnChange}
          />
        </div>
        <div className={classes.row}>
          <TextField
            name="gutter"
            value={gutter}
            label="Gutter (mm)"
            onInput={onHandleColumnChange}
          />
        </div>
      </form>
    </Paper>
  );
};

export default SizeSetupDetails;
