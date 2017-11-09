/**
 * Created by huyhuynh on 8/1/17.
 */
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import authReducer from './authReducer'

export default combineReducers({
    routing: routerReducer,
    authReducer
});