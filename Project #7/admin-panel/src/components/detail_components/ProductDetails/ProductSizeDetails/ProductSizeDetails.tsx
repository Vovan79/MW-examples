import React from 'react';
import {
  Paper,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import PaperHeader from '../../../interface_components/PaperHeader';
// import { CHECKBOX_ARR } from '../../../../constants/details.constants';
import useStyles from './styles';

type Props = {
  title: string,
  data: any,
  onHandleSizesChange: any,
};

const ProductSizeDetails: React.FC<Props> = ({ title, data, onHandleSizesChange }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <PaperHeader title={title} />
      <FormGroup className={classes.container}>
        {data && data.map((item: any, index: number) => (
          <FormControlLabel
            key={item.id}
            label={item.name}
            control={(
              <Checkbox
                value={item.id}
                checked={data[index].checked}
                onChange={() => {
                  onHandleSizesChange(index);
                }}
              />
            )}
          />
        ))}
      </FormGroup>
    </Paper>
  );
};

export default ProductSizeDetails;
