import React from 'react';
import {
  Paper,
  Container,
  Button,
  IconButton,
  TextField,
} from '@material-ui/core';
import { AddCircle, DeleteOutline } from '@material-ui/icons';
import PaperHeader from '../../../interface_components/PaperHeader';
import { ADD_NEW_GROUP } from '../../../../constants/details.constants';
import { TemplateGroup } from '../../../../redux/modules/products/types';
import useStyles from './styles';

type Props = {
  title: string,
  data: TemplateGroup[],
  addNewTemplateGroup: any,
  deleteTemplateGroup: any,
  onHandleTemplateGroupChange: any,
};

const ProductTemplateDetails: React.FC<Props> = ({
  title,
  data,
  addNewTemplateGroup,
  deleteTemplateGroup,
  onHandleTemplateGroupChange,
}) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <PaperHeader title={title} />
      <Container className={classes.container}>
        {data && data.length && data.map((item: TemplateGroup, index: number) => (
          <div key={index} className={item.status === 'delete' ? classes.delete : classes.row}>
            <TextField
              value={item.name}
              onInput={event => onHandleTemplateGroupChange(event, index)}
            />
            {
              (data.length > 1) && (
                <IconButton
                  className={classes.icon}
                  onClick={() => deleteTemplateGroup(index)}
                >
                  <DeleteOutline />
                </IconButton>
              )
            }
          </div>
        ))}
        <Button
          className={classes.buttom}
          startIcon={<AddCircle />}
          onClick={addNewTemplateGroup}
        >
          {ADD_NEW_GROUP}
        </Button>
      </Container>
    </Paper>
  );
};

export default ProductTemplateDetails;
