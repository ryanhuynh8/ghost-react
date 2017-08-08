/**
 * Created by huyhuynh on 8/1/17.
 */

import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import rootReducer from '../reducers'
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist'

export const history = createHistory();

const initialState = { };
const enhancers = [];
const middleware = [
    routerMiddleware(history),
    thunk
];

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension;

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension());
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    autoRehydrate(),
    ...enhancers
);

const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers
);

persistStore(store);

export default store;