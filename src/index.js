import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'
import { Route, Link } from 'react-router-dom'
import store, { history } from './store'
import ScrollToTop from './ScrollToTop'

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history} onUpdate={() => window.scrollTo(0, 0)}>
            <div>
                <ScrollToTop>
                    <App />
                </ScrollToTop>
            </div>
        </ConnectedRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
