import React from 'react';
import {
  Paper,
  TextField,
  MenuItem,
  Button,
  InputAdornment,
} from '@material-ui/core';
import PaperHeader from '../../../interface_components/PaperHeader';
import { SVGCategoryData } from '../../../../redux/modules/svgcategories/types';
import useStyles from './styles';

type Props = {
  newSVG?: boolean,
  title: string,
  data: {
    name: string,
    svgCategoryId: string,
    cost: string,
    order: string,
    link: string,
  },
  type: string,
  svgCategories: SVGCategoryData[] | undefined,
  onHandleEntityChange: any,
  onUploadSVG?: any,
};

const SVGInfoDetails: React.FC<Props> = ({
  newSVG,
  title,
  data,
  type,
  svgCategories,
  onHandleEntityChange,
  onUploadSVG,
}) => {
  const classes = useStyles();
  const {
    name,
    svgCategoryId,
    cost,
    order,
    link,
  } = data;

  return (
    <Paper className={classes.root}>
      <PaperHeader title={title} />
      <form className={classes.container} noValidate autoComplete="off">
        <div className={classes.row}>
          <TextField
            name="name"
            value={name}
            label={type === 'svg_icon' ? 'SVG Icon name' : 'SVG Shape name'}
            onInput={onHandleEntityChange}
          />
        </div>
        <div className={classes.row}>
          <TextField
            select
            SelectProps={{ classes: { root: classes.select } }}
            name="svgCategoryId"
            value={svgCategoryId}
            label="Category"
            onChange={onHandleEntityChange}
          >
            {
              svgCategories
                ? svgCategories.map((item: SVGCategoryData) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.name}
                  </MenuItem>
                ))
                : []
            }
          </TextField>
        </div>
        <div className={classes.row}>
          <TextField
            name="cost"
            value={cost}
            label="Cost"
            onInput={onHandleEntityChange}
          />
        </div>
        <div className={classes.row}>
          <TextField
            name="order"
            value={order}
            label="Order"
            onInput={onHandleEntityChange}
          />
        </div>
        {link && (
          <div className={classes.row}>
            <TextField
              classes={{ root: classes.preview }}
              name="preview"
              label="Preview"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <object data={link} type="image/svg+xml" width="30" height="22">
                      SVG
                    </object>
                  </InputAdornment>
                ),
              }}
            />
          </div>
        )}
        {newSVG && (
          <div className={classes.row}>
            <input
              className={classes.input}
              id="contained-button-file"
              type="file"
              onChange={onUploadSVG}
            />
            <label className={classes.label} htmlFor="contained-button-file">
              <Button
                variant="contained"
                component="span"
                className={classes.button}
              >
                UPLOAD SVG
              </Button>
            </label>
          </div>
        )}
      </form>
    </Paper>
  );
};

export default SVGInfoDetails;
