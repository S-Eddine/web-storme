import 'babel-polyfill';
import React from 'react';
import routes from './routes';
import configureStore from './redux/store/configureStore';
import { loadCourses } from './redux/actions/courseAction';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import {render} from 'react-dom';

import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();//no initial State because it's already passed in reducer
store.dispatch(loadCourses());

render (
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);