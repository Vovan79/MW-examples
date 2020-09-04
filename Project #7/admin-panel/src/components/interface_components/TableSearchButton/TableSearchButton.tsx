import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IconButton } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { AppState } from '../../../redux/store';
import { setDetailMode } from '../../../redux/modules/mode/actions';
import { DETAIL_MODE } from '../../../redux/modules/mode/types';
import useStyles from './styles';

type Props = {
  id: number,
  font?: string,
  svg?: string,
};

const TableSearchButton: React.FC<Props> = ({ id, font, svg }) => {
  const category = useSelector((state: AppState) => state.leftSidebar.selectedMenu);
  const dispatch = useDispatch();

  const classes = useStyles();

  const handleShowDetails = () => {
    const modePayload = {
      mode: DETAIL_MODE,
      category: font ? font : (svg ? svg : category),
      id,
    };

    dispatch(setDetailMode(modePayload));
  };

  return (
    <IconButton onClick={handleShowDetails} className={classes.button}>
      <Search style={{ fontSize: 'medium' }} />
    </IconButton>
  );
};

export default TableSearchButton;
