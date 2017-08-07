/**
 * Created by huyhuynh on 8/2/17.
 */
import { FETCH_SESSION_LIST_SUCCESS } from '../store/actionTypes'

const initialState = {
    sessionList: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SESSION_LIST_SUCCESS:
            return {
                ...state,
                sessionList: action.payload
            };
        default:
            return state;
    }

}