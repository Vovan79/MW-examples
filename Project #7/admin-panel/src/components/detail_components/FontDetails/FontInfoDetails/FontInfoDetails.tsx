import React from 'react';
import {
  Paper,
  TextField,
  MenuItem,
  Button,
} from '@material-ui/core';
import PaperHeader from '../../../interface_components/PaperHeader';
import { FontCategoryData } from '../../../../redux/modules/fontcategories/types';
import useStyles from './styles';

type Props = {
  newFont?: boolean,
  title: string,
  data: {
    name: string,
    fontCategoryId: string,
  },
  fontCategories: FontCategoryData[] | undefined,
  onHandleEntityChange: any,
  onUploadFont?: any,
};

const FontInfoDetails: React.FC<Props> = ({
  newFont,
  title,
  data,
  fontCategories,
  onHandleEntityChange,
  onUploadFont,
}) => {
  const classes = useStyles();
  const { name, fontCategoryId } = data;

  return (
    <Paper className={classes.root}>
      <PaperHeader title={title} />
      <form className={classes.container} noValidate autoComplete="off">
        <div className={classes.row}>
          <TextField
            name="name"
            value={name}
            label="Font name"
            onInput={onHandleEntityChange}
          />
        </div>
        <div className={classes.row}>
          <TextField
            select
            SelectProps={{ classes: { root: classes.select } }}
            name="fontCategoryId"
            value={fontCategoryId}
            label="Category"
            onChange={onHandleEntityChange}
          >
            {
              fontCategories
                ? fontCategories.map((item: FontCategoryData) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.name}
                  </MenuItem>
                ))
                : []
            }
          </TextField>
        </div>
        {newFont && (
          <div className={classes.row}>
            <input
              className={classes.input}
              id="contained-button-file"
              type="file"
              onChange={onUploadFont}
            />
            <label className={classes.label} htmlFor="contained-button-file">
              <Button
                variant="contained"
                component="span"
                className={classes.button}
              >
                UPLOAD FONT
              </Button>
            </label>
          </div>
        )}
      </form>
    </Paper>
  );
};

export default FontInfoDetails;
