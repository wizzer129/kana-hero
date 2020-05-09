import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from '../layout/Landing';
import Smiley from '../landing/Smiley';
import FlyingKana from '../landing/FlyingKana';

const Routes = (props) => {
    return (
        <Router>
            <FlyingKana />
            <Switch>
                <Route exact path='/' component={Landing} />
            </Switch>
        </Router>
    );
};

export default Routes;
