import { AUTH_LOGIN_SUCCESS, AUTH_LOGIN_FAILED, AUTH_LOGIN_PROCESSING } from '../store/actionTypes'

const initialState = {
    token: '',
    isProcessingLogin: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case AUTH_LOGIN_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                isProcessingLogin: false
            };
        case AUTH_LOGIN_PROCESSING:
            return {
                ...state,
                isProcessingLogin: true
            };
        default:
            return state;
    }

}