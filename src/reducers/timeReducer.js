/**
 * Created by huyhuynh on 8/9/17.
 */
import { FETCH_TIME_LIST_SUCCESS } from '../store/actionTypes'

const initialState = {
    timeList: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TIME_LIST_SUCCESS:
            return {
                ...state,
                timeList: action.payload
            };
        default:
            return state;
    }

}