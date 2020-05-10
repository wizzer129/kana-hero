import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { SET_KANA } from './actions/types';
import kana from './data/kana';
import Routes from './components/routes/Routes';

import './App.css';

const App = () => {
    useEffect(() => {
        store.dispatch({
            type: SET_KANA,
            payload: kana,
        });
    }, []);
    return (
        <Provider store={store}>
            <Routes />
        </Provider>
    );
};

export default App;
