/**
 * Created by huyhuynh on 8/9/17.
 */
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import apiService from '../services/apiService'
import { FETCH_SESSION_LIST, FETCH_SESSION_LIST_SUCCESS, FETCH_SESSION_LIST_FAILED } from '../store/actionTypes'

const fetchSessionList = function* () {
    try {
        const sessionList = yield call(apiService.getSessionList);
        yield put({type: FETCH_SESSION_LIST_SUCCESS, payload: sessionList});
    } catch (e) {
        yield put({type: FETCH_SESSION_LIST_FAILED, payload: e.message});
    }
};

export default function* mainSaga() {
    yield takeEvery(FETCH_SESSION_LIST, fetchSessionList);
}
