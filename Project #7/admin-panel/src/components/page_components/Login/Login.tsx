import React, { useCallback, useState } from 'react';
import {
  Button, CircularProgress, Grid, Paper, TextField, Typography,
} from '@material-ui/core';
import {
  loginRequest as LoginRequest,
  deleteRequestsError as DeleteRequestsError,
} from '../../../redux/modules/userData/actions';
import { RequestError, RequestName } from '../../../redux/modules/userData/types';
import useStyles from './styles';

type State = { email: string, password: string };
type Props = {
  loginRequest: typeof LoginRequest,
  deleteRequestsError: typeof DeleteRequestsError,
  loadingRequests: RequestName[],
  requestErrors: RequestError[],
};

const Login: React.FC<Props> = ({
  loginRequest, deleteRequestsError, loadingRequests, requestErrors,
}) => {
  const classes = useStyles();
  const [loginData, setLoginData] = useState<State>({ email: '', password: '' });

  const isLoginRequestLoading = useCallback(
    () => loadingRequests.includes(RequestName.LOGIN),
    [loadingRequests],
  );
  const loginError = useCallback(() => {
    const loginErrorData = requestErrors.find(item => item.requestName === RequestName.LOGIN);
    return loginErrorData ? loginErrorData.error : null;
  }, [requestErrors]);

  const isLoginDisabled = () => (
    loginData.email === '' || loginData.password === '' || isLoginRequestLoading() || Boolean(loginError())
  );

  const handleChangeInput = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
    if (loginError()) {
      deleteRequestsError(RequestName.LOGIN);
    }
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLogin = () => loginRequest(loginData);

  const handleLoginByPressEnter = (event: React.KeyboardEvent<Element>) => {
    if (event.key === 'Enter' && !isLoginDisabled()) {
      handleLogin();
    }
  };

  return (
    <Grid container className={classes.root} direction="column" alignItems="center" justify="center">
      <Grid item>
        <Paper className={classes.formContainer}>
          <Typography variant="h6" className={classes.title}>
            Login to Admin Panel
          </Typography>
          <Grid container onKeyPress={handleLoginByPressEnter}>
            <Grid item>
              <TextField
                required
                variant="outlined"
                label="Email"
                name="email"
                error={Boolean(loginError())}
                value={loginData.email}
                onChange={handleChangeInput}
                fullWidth
                margin="normal"
                classes={{ root: classes.textField }}
                InputProps={{ className: classes.textInput, autoComplete: 'off' }}
                InputLabelProps={{ classes: { root: classes.labelRoot } }}
              />
              <TextField
                required
                variant="outlined"
                type="password"
                autoComplete="off"
                label="Password"
                name="password"
                error={Boolean(loginError())}
                value={loginData.password}
                onChange={handleChangeInput}
                fullWidth
                classes={{ root: classes.textField }}
                InputProps={{ className: classes.textInput, autoComplete: 'off' }}
                InputLabelProps={{ classes: { root: classes.labelRoot } }}
              />
              <Typography variant="body1" className={classes.errorMsg}>
                {loginError() && (`Error: ${loginError()}`)}
              </Typography>
            </Grid>
            <Grid item>
              <Grid container className={classes.buttonWrapper}>
                <Button
                  variant="contained"
                  className={classes.button}
                  size="large"
                  disabled={isLoginDisabled()}
                  onClick={handleLogin}
                >
                  Login
                </Button>
                {isLoginRequestLoading() && <CircularProgress color="inherit" />}
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;
