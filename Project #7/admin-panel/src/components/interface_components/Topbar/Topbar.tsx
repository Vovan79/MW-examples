import React, { useCallback } from 'react';
import { Toolbar, Grid, Typography } from '@material-ui/core';
import EjectIcon from '@material-ui/icons/Eject';
import { ReactComponent as Layout } from '../../../assets/app-icons/layout.svg';
import { changeActive } from '../../../redux/modules/leftSidebar/actions';
import { logoutRequest as LogoutRequest } from '../../../redux/modules/userData/actions';
import { RequestName } from '../../../redux/modules/userData/types';
import CustomButton from '../CustomButton';
import { UserData } from '../../../services/UserData';
import useStyles from './styles';

type Props = {
  logoutRequest: typeof LogoutRequest,
  changeActiveMenu: typeof changeActive,
  email: UserData['email'],
  loadingRequests: RequestName[],
};

const Topbar: React.FC<Props> = ({ logoutRequest, loadingRequests, email }) => {
  const classes = useStyles();

  const handleLogout = () => {
    logoutRequest();
  };

  const isLogoutRequestActive = useCallback(
    () => loadingRequests.includes(RequestName.LOGOUT),
    [loadingRequests],
  );

  return (
    <Toolbar className={classes.toolbar}>
      <Grid container justify="space-between" alignItems="center">
        <Grid item>
          <Grid container justify="flex-start" alignItems="flex-start">
            <Layout width={90} height={40} fill="white" />
            <Typography className={classes.labelText}>{email}</Typography>
          </Grid>
        </Grid>
        <Grid item>
          <CustomButton
            onClick={handleLogout}
            variant="blue"
            className={classes.customButton}
            disabled={isLogoutRequestActive()}
          >
            <EjectIcon className={classes.buttonIcon} />
            Logout
          </CustomButton>
        </Grid>
      </Grid>
    </Toolbar>
  );
};

export default Topbar;
