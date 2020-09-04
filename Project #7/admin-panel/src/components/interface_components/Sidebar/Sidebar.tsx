import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Drawer,
  Grid,
  Menu,
  MenuItem,
} from '@material-ui/core';
import { changeActive } from '../../../redux/modules/leftSidebar/actions';
import { setTableMode } from '../../../redux/modules/mode/actions';
import { LeftSideBarState, LeftMenuItems } from '../../../redux/modules/leftSidebar/types';
import CustomMenuItem from '../CustomMenuItem';
import menuItems from './menuItems';
import { TABLE_MODE } from '../../../redux/modules/mode/types';
import useStyles from './styles';

type Props = {
  changeActiveMenu: typeof changeActive;
  leftSidebar: LeftSideBarState;
};

const Sidebar: React.FC<Props> = ({ leftSidebar, changeActiveMenu }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const classes = useStyles();
  const dispatch = useDispatch();

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeActiveMenu = (event: React.MouseEvent<HTMLButtonElement>, menu: LeftMenuItems['label']) => {
    if (menu === 'Dashboard') {
      // eslint-disable-next-line no-restricted-globals
      location.href = '';
    }

    if (menu === 'SVGs') {
      setAnchorEl(event.currentTarget);
    }

    const modePayload = {
      mode: TABLE_MODE,
      category: '',
      id: 0,
    };
    dispatch(setTableMode(modePayload));
    dispatch(changeActiveMenu(menu));
  };

  const handleChangeActiveSVGMenu = (type: 'svg_icon' | 'svg_shape') => {
    const modePayload = {
      mode: TABLE_MODE,
      category: type,
      id: 0,
    };
    dispatch(setTableMode(modePayload));
    handleClose();
  };

  return (
    <Drawer
      className={classes.drawer}
      classes={{ paper: classes.drawerPaper }}
      variant="permanent"
    >
      <div className={classes.toolbar} />
      <Grid container direction="column" justify="space-between" className={classes.menuContainer}>
        <Grid item className={classes.menuItem}>
          {menuItems.map(({ label, icon }) => (
            <CustomMenuItem
              key={label}
              label={label}
              icon={icon}
              selected={label === leftSidebar.selectedMenu}
              onMenuClick={handleChangeActiveMenu}
            />
          ))}
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => handleChangeActiveSVGMenu('svg_icon')}>SVGs Icon</MenuItem>
            <MenuItem onClick={() => handleChangeActiveSVGMenu('svg_shape')}>SVGs Shape</MenuItem>
          </Menu>
        </Grid>
      </Grid>
    </Drawer>
  );
};

export default Sidebar;
