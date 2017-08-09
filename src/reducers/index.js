/**
 * Created by huyhuynh on 8/1/17.
 */
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import sessionReducer from './sessionReducer'
import dateReducer from './dateReducer'
import timeReducer from './timeReducer'

export default combineReducers({
    routing: routerReducer,
    sessionReducer,
    dateReducer,
    timeReducer
});