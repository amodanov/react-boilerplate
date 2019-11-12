import React from 'react';
import {Switch} from 'react-router-dom';
import ProtectedRoute from './HelperComponents/ProtectedRoute';
import Home from '../Modules/Common/Pages/Home';
import NotFound from '../Modules/Common/Pages/NotFound';

const MainRouting = (): React.ReactElement => {
    return (
        <Switch>
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute path="*" component={NotFound} />
        </Switch>
    );
};

export default MainRouting;
