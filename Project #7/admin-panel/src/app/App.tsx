import React from 'react';
import { SnackbarProvider } from 'notistack';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider } from '@material-ui/styles';
import { Provider } from 'react-redux';
import theme from './theme';
import store, { history } from '../redux/store';
import ProtectedRoute from '../components/route_components/ProtectedRoute';
import Login from '../components/page_components/Login';
import Page404 from '../components/page_components/Page404';
import Main from '../components/page_components/Main';
import Notifier from '../components/interface_components/Notifier';
import routes from '../constants/routes.constants';

const snackbarProviderProps = {
  maxSnack: 3,
  autoHideDuration: 3000,
  resumeHideDuration: 400,
  anchorOrigin: { vertical: 'top', horizontal: 'right' },
} as const;

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <SnackbarProvider {...snackbarProviderProps}>
        <Notifier />
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path={routes.root} component={Login} />
            <ProtectedRoute
              exact
              path={routes.panel}
              component={Main}
              allowedRoles={['admin']}
            />
            <Route component={Page404} />
          </Switch>
        </ConnectedRouter>
      </SnackbarProvider>
    </Provider>
  </ThemeProvider>
);

export default App;
