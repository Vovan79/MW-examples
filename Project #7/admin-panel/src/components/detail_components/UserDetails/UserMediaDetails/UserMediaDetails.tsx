import React from 'react';
import { Paper, TextField } from '@material-ui/core';
import PaperHeader from '../../../interface_components/PaperHeader';
import useStyles from './styles';

type Props = {
  data: any,
  title: string,
  onHandleSocialMediaChange: any,
};

const UserMediaDetails: React.FC<Props> = ({ data, title, onHandleSocialMediaChange }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <PaperHeader title={title} plusButton />
      <form className={classes.container} noValidate autoComplete="off">
        {data.map((item: any, index: number) => (
          <TextField
            key={index}
            name={item.name}
            value={item.value}
            label={item.label}
            onInput={(event: any) => onHandleSocialMediaChange(event, index)}
          />
        ))}
      </form>
    </Paper>
  );
};

export default UserMediaDetails;
