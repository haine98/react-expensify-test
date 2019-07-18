//import validator from "validator";
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';

import AppRouter, {history} from './routers/AppRouter';

import configureStore from './store/configureStore';
import {startSetExpenses} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import {login, logout} from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
//import './playground/promises';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import {firebase} from './firebase/firebase';


const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
}

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));


//dispatch for reducers changes
firebase.auth().onAuthStateChanged((user) => {
    if (user) { //user just logged in
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard');
            }
        });
    } else { //just logged out
        store.dispatch(logout());
        renderApp();
        history.push('/');
    } 
});