import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'
import { Route, Link } from 'react-router-dom'
import store, { history } from './store'

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <App />
            </div>
    </ConnectedRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
