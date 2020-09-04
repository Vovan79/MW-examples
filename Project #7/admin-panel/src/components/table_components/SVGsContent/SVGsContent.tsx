import React from 'react';
import { Container } from '@material-ui/core';
import { SVGsTable, SVGCategoriesTable } from './Tables';
import useStyles from './styles';

const SVGsContent: React.FC = () => {
  const classes = useStyles();

  return (
    <Container className={classes.content}>
      <SVGCategoriesTable />
      <SVGsTable />
    </Container>
  );
};

export default SVGsContent;
