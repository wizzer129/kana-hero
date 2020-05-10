import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from '../layout/Landing';
import HomePageLoader from '../loaders/HomePageLoader';

const Routes = ({ isKanaLoading }) => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' render={(props) => (isKanaLoading ? <HomePageLoader /> : <Landing />)} />
            </Switch>
        </Router>
    );
};

const mapStateToProps = (state) => ({
    isKanaLoading: state.kana.loading,
});

export default connect(mapStateToProps, null)(Routes);
