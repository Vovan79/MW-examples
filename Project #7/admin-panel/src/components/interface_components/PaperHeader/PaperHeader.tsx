import React from 'react';
import { Typography, IconButton } from '@material-ui/core';
import { LibraryAdd } from '@material-ui/icons';
import useStyles from './styles';

type Props = {
  title: string,
  plusButton?: boolean,
};

const PaperHeader: React.FC<Props> = ({ title, plusButton }) => {
  const classes = useStyles();

  return (
    <Typography component="div" className={classes.title}>
      {title}
      {
        plusButton && (
          <IconButton className={classes.button}>
            <LibraryAdd style={{ fontSize: 'medium' }} />
          </IconButton>
        )
      }
    </Typography>
  );
};

export default PaperHeader;
