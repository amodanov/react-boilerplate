import React from 'react';
import {Route, RouteProps} from 'react-router-dom';

const ProtectedRoute = ({component: Component, path, exact, ...props}: RouteProps): React.ReactElement => (
    <Route {...path} {...exact} render={(): React.ReactElement => <Component {...props} />} />
);

export default ProtectedRoute;
