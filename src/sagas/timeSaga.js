/**
 * Created by huyhuynh on 8/9/17.
 */
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import apiService from '../services/apiService'
import { FETCH_TIME_LIST, FETCH_TIME_LIST_FAILED, FETCH_TIME_LIST_SUCCESS, UPDATE_TIME_FORMAT } from '../store/actionTypes'

const fetchTimeList = function* (action) {
    try {
        const timeList = yield call(apiService.getTimeList, action.payload);
        yield put({type: FETCH_TIME_LIST_SUCCESS, payload: timeList});
    } catch (e) {
        yield put({type: FETCH_TIME_LIST_FAILED, payload: e.message});
    }
};

export default function* mainSaga() {
    yield takeEvery(FETCH_TIME_LIST, fetchTimeList);
}
