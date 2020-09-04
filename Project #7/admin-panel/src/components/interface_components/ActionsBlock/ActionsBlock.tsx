import React from 'react';
import { Container, IconButton } from '@material-ui/core';
import { LibraryAdd, Mail } from '@material-ui/icons';
import TableSearchButton from '../TableSearchButton';
import TableDeleteButton from '../TableDeleteButton';
import useStyles from './styles';

type Props = {
  id: number,
  short?: boolean,
  userTable?: boolean,
  font?: string,
  svg?: string,
};

const ActionsBlock: React.FC<Props> = ({
  id,
  svg,
  font,
  short,
  userTable,
}) => {
  const classes = useStyles();

  if (short) {
    return (
      <Container className={classes.root}>
        <TableSearchButton id={id} font={font} svg={svg} />
        {
          !userTable && <TableDeleteButton id={id} font={font} svg={svg} />
        }
      </Container>
    );
  }

  return (
    <Container className={classes.root}>
      <TableSearchButton id={id} />
      <IconButton className={classes.button}>
        <LibraryAdd style={{ fontSize: 'medium' }} />
      </IconButton>
      <IconButton className={classes.button}>
        <Mail style={{ fontSize: 'medium' }} />
      </IconButton>
      <TableDeleteButton id={id} />
    </Container>
  );
};

export default ActionsBlock;
