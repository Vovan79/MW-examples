import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  IconButton,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@material-ui/core';
import { DeleteOutline } from '@material-ui/icons';
import { AppState } from '../../../redux/store';
import { deleteSizeEntityRequest } from '../../../redux/modules/sizes/actions';
import { deleteProductEntityRequest } from '../../../redux/modules/products/actions';
import { deleteCategoryEntityRequest } from '../../../redux/modules/categories/actions';
import { deleteFontEntityRequest } from '../../../redux/modules/fonts/actions';
import { deleteFontCategoryEntityRequest } from '../../../redux/modules/fontcategories/actions';
import { deleteFontComboEntityRequest } from '../../../redux/modules/fontcombos/actions';
import { deletePlanEntityRequest } from '../../../redux/modules/plans/actions';
import { deleteSVGEntityRequest } from '../../../redux/modules/svgs/actions';
import { deleteSVGCategoryEntityRequest } from '../../../redux/modules/svgcategories/actions';
import {
  SIZE,
  CATEGORY,
  PRODUCT,
  FONT,
  FONT_CATEGORIES,
  FONT_COMBOS,
  PLAN,
  SVG_ICON,
  SVG_SHAPE,
  SVG_ICON_CATEGORIES,
  SVG_SHAPE_CATEGORIES,
} from '../../../constants/tables.constants';
import useStyles from './styles';

type Props = {
  id: number,
  font?: string,
  svg?: string,
};

const TableDeleteButton: React.FC<Props> = ({ id, font, svg }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selectedMenu = useSelector((state: AppState) => state.leftSidebar.selectedMenu);

  const [open, setOpen] = useState(false);

  const handleDeleteItem = () => {
    setOpen(true);
  };

  const confirmDeleteItem = () => {
    switch (selectedMenu) {
      case SIZE:
        dispatch(deleteSizeEntityRequest(id));
        break;
      case CATEGORY:
        dispatch(deleteCategoryEntityRequest(id));
        break;
      case PRODUCT:
        dispatch(deleteProductEntityRequest(id));
        break;
      case PLAN:
        dispatch(deletePlanEntityRequest(id));
        break;
      default:
        break;
    }

    switch (font) {
      case FONT:
        dispatch(deleteFontEntityRequest(id));
        break;
      case FONT_CATEGORIES:
        dispatch(deleteFontCategoryEntityRequest(id));
        break;
      case FONT_COMBOS:
        dispatch(deleteFontComboEntityRequest(id));
        break;
      default:
        break;
    }

    switch (svg) {
      case SVG_ICON_CATEGORIES:
      case SVG_SHAPE_CATEGORIES:
        dispatch(deleteSVGCategoryEntityRequest({ id, type: svg }));
        break;
      case SVG_ICON:
      case SVG_SHAPE:
        dispatch(deleteSVGEntityRequest({ id, type: svg }));
        break;
      default:
        break;
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton onClick={handleDeleteItem} className={classes.button}>
        <DeleteOutline style={{ fontSize: 'medium' }} />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        classes={{ paper: classes.root }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          disableTypography
          classes={{ root: classes.title }}
        >
          Deleting...
        </DialogTitle>
        <DialogContent classes={{ root: classes.content }}>
          <DialogContentText>{`Are you sure to delete the ${selectedMenu} item?`}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={confirmDeleteItem} color="primary">
            OK
          </Button>
          <Button variant="contained" onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default TableDeleteButton;
