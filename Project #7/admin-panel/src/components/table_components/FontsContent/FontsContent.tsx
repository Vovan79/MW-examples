import React from 'react';
import { Container } from '@material-ui/core';
import { FontsTable, FontCategoriesTable, FontCombosTable } from './Tables';
import { TABLE_TITLE } from '../../../constants/tables.constants';
import useStyles from './styles';

const FontsContent: React.FC = () => {
  const classes = useStyles();

  return (
    <Container className={classes.content}>
      <FontCategoriesTable title={TABLE_TITLE.font_category} />
      <FontsTable title={TABLE_TITLE.font} />
      <FontCombosTable title={TABLE_TITLE.font_combo} />
    </Container>
  );
};

export default FontsContent;
