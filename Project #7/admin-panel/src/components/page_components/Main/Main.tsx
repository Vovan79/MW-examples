import React from 'react';
import { useSelector } from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Topbar from '../../interface_components/Topbar';
import Sidebar from '../../interface_components/Sidebar';
import TableContent from './TableContent';
import DetailContent from './DetailContent';
import { AppState } from '../../../redux/store';
import { TABLE_MODE, DETAIL_MODE, ADD_MODE } from '../../../redux/modules/mode/types';
import useStyles from './styles';

const Main = () => {
  const modeData = useSelector((state: AppState) => state.modeData);

  const classes = useStyles();
  const { mode, category, id } = modeData;

  const renderContent = (value: string) => {
    switch (value) {
      case TABLE_MODE:
        return <TableContent />;
      case DETAIL_MODE:
        return <DetailContent category={category} id={id} />;
      case ADD_MODE:
        return <DetailContent category={category} />;
      default:
        return <TableContent />;
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Topbar />
      </AppBar>
      <Sidebar />
      <div className={classes.content}>
        {renderContent(mode)}
      </div>
    </div>
  );
};

export default Main;
