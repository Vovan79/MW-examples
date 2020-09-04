import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { UserRole } from '../../../services/UserData';
import routes from '../../../constants/routes.constants';

type Props = {
  allowedRoles: Array<UserRole['name']>,
  userRole: UserRole['name'],
};

const ProtectedRoute: React.FC<Props & RouteProps> = (
  {
    component: Component,
    allowedRoles,
    userRole,
    ...rest
  },
) => {
  const isShowContent = allowedRoles.includes(userRole);

  return (
    <Route
      {...rest}
      render={props => {
        if (!isShowContent || !Component) {
          return <Redirect to={routes.root} />;
        }

        return <Component {...props} />;
      }}
    />
  );
};

export default ProtectedRoute;
