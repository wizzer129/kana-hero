import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './components/routes/Routes';

import './App.css';

const App = () => {
    return (
        <Provider store={store}>
            <Routes />
        </Provider>
    );
};

export default App;
