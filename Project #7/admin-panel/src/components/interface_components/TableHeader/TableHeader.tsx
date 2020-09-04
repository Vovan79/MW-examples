import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Grid,
  Typography,
  Button,
  TextField,
  IconButton,
} from '@material-ui/core';
import { AddCircle, Search } from '@material-ui/icons';
import { AppState } from '../../../redux/store';
import { setAddMode } from '../../../redux/modules/mode/actions';
import { ADD_MODE } from '../../../redux/modules/mode/types';
import useStyles from './styles';

type Props = {
  title: string,
  font?: string,
  svg?: string,
};

const TableHeader: React.FC<Props> = ({ title, font, svg }) => {
  const category = useSelector((state: AppState) => state.leftSidebar.selectedMenu);
  const dispatch = useDispatch();

  const classes = useStyles();

  const handleAddNewEntity = () => {
    const modePayload = {
      mode: ADD_MODE,
      category: font ? font : (svg ? svg : category),
      id: 0,
    };

    dispatch(setAddMode(modePayload));
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={font ? 12 : (svg ? 12 : 6)}>
        <Grid container direction="column" className={classes.titleblock}>
          <Grid item>
            {
              font
                ? <Typography className={classes.title}>{title}</Typography>
                : <Typography className={classes.title}>{`${title} list`}</Typography>
            }
          </Grid>
          <Grid item>
            <Button className={classes.titlebutton} startIcon={<AddCircle />} onClick={handleAddNewEntity}>
              {`ADD NEW ${title.toUpperCase()}`}
            </Button>
            {/* <Button className={classes.titlebutton}>
              EXPORT CSV
            </Button> */}
          </Grid>
        </Grid>
      </Grid>
      {
        (!font && !svg) && (
          <Grid item xs={6}>
            <Grid container className={classes.searchblock}>
              <TextField
                size="small"
                variant="outlined"
                placeholder="Search Users"
                className={classes.searchfield}
              />
              <IconButton className={classes.searchbutton}>
                <Search />
              </IconButton>
            </Grid>
          </Grid>
        )
      }
    </Grid>
  );
};

export default TableHeader;
