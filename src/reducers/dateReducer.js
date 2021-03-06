/**
 * Created by huyhuynh on 8/8/17.
 */
import { FETCH_SESSION_DAY_LIST_SUCCESS, SELECT_DATE } from '../store/actionTypes'

const initialState = {
    dateList: [],
    selectedDate: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SESSION_DAY_LIST_SUCCESS:
            return {
                ...state,
                dateList: action.payload
            };
        case SELECT_DATE:
            return {
                ...state,
                selectedDate: action.payload
            };
        default:
            return state;
    }

}