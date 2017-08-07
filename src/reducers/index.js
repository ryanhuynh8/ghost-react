/**
 * Created by huyhuynh on 8/1/17.
 */
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import sessionReducer from './sessionReducer'

export default combineReducers({
    routing: routerReducer,
    sessionReducer
});