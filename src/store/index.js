/**
 * Created by huyhuynh on 8/1/17.
 */

import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import rootReducer from '../reducers'
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import dateSaga from '../sagas/dateSaga'
import sessionSaga from '../sagas/sessionSaga'
import timeSaga from '../sagas/timeSaga'
import authSaga from '../sagas/authSaga'

export const history = createHistory();

const sagaMiddleware = createSagaMiddleware();

const initialState = { };
const enhancers = [];
const middleware = [
    routerMiddleware(history),
    sagaMiddleware
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

sagaMiddleware.run(dateSaga);
sagaMiddleware.run(sessionSaga);
sagaMiddleware.run(timeSaga);
sagaMiddleware.run(authSaga);

persistStore(store);

export default store;