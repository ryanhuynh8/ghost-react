/**
 * Created by huyhuynh on 8/1/17.
 */
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import blogInfo from './blogInfo'

export default combineReducers({
    routing: routerReducer,
    blogInfo
});