import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from './redux/createStore';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';

import App from './app';
const store = createStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,

    document.getElementById('root'),
);
