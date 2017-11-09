import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import apiService from '../services/apiService'
import { AUTH_LOGIN, AUTH_LOGIN_SUCCESS, AUTH_LOGIN_FAILED, AUTH_LOGIN_PROCESSING, SHOW_MENU_BAR } from '../store/actionTypes'

const doLogin = function* (action) {
    try {
        yield put({type: AUTH_LOGIN_PROCESSING});
        const response = yield call(apiService.login, action.payload);
        yield put({type: AUTH_LOGIN_SUCCESS, payload: response.data});
        yield put({type: SHOW_MENU_BAR});
        localStorage.setItem('token', response.data.token);
    } catch (e) {
        yield put({type: AUTH_LOGIN_FAILED, payload: e.message});
    }
};

export default function* mainSaga() {
    yield takeEvery(AUTH_LOGIN, doLogin);
}
