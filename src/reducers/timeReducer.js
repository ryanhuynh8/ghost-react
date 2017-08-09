/**
 * Created by huyhuynh on 8/9/17.
 */
import { FETCH_TIME_LIST_SUCCESS, SELECT_TIME } from '../store/actionTypes'

const initialState = {
    timeList: [],
    selectedTime: '',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TIME_LIST_SUCCESS:
            return {
                ...state,
                timeList: action.payload
            };
        case SELECT_TIME:
            return {
                ...state,
                selectedTime: action.payload
            };
        default:
            return state;
    }

}