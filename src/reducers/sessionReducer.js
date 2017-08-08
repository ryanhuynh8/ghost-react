/**
 * Created by huyhuynh on 8/2/17.
 */
import { FETCH_SESSION_LIST_SUCCESS, SELECT_SESSION } from '../store/actionTypes'

const initialState = {
    sessionList: [],
    selectedSession: {}
};

export default (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case FETCH_SESSION_LIST_SUCCESS:
            return {
                ...state,
                sessionList: action.payload
            };
        case SELECT_SESSION:
            return {
                ...state,
                selectedSession: action.payload
            };
        default:
            return state;
    }

}