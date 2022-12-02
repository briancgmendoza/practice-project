import { Reducer } from 'redux';

export const actionTypes = {
    GET_PROFILE_REQUEST: 'GET_PROFILE_REQUEST',
    GET_PROFILE_SUCCESS: 'GET_PROFILE_SUCCESS',
    GET_PROFILE_FAILED: 'GET_PROFILE_FAILED',

    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILED: 'LOGIN_FAILED',

    LOGOUT_REQUEST: 'LOGOUT_REQUEST',
    LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
    LOGOUT_FAILED: 'LOGOUT_FAILED',

    GOOGLE_LOGIN_REQUEST: 'GOOGLE_LOGIN_REQUEST',
    GOOGLE_LOGIN_SUCCESS: 'GOOGLE_LOGIN_SUCCESS',
    GOOGLE_LOGIN_FAILED: 'GOOGLE_LOGIN_FAILED',

    RESET_AUTH_STATE: 'RESET_AUTH_STATE',
    REFRESH_TOKEN: 'REFRESH_TOKEN',
    REFRESH_TOKEN_SUCCESS: 'REFRESH_TOKEN_SUCCESS',
    NAVBAR_STATUS: 'NAVBAR_STATUS',
};

export const actionCreators = {
    login: (body: object) => ({ type: actionTypes.LOGIN_REQUEST, body}),
    googleLogin: (body: object) => ({
        type: actionTypes.GOOGLE_LOGIN_REQUEST,
        body,
    }),
    googleLoginFailed: () => ({ type: actionTypes.GOOGLE_LOGIN_FAILED }),
    getProfile: (userId: string) => ({
        type: actionTypes.GET_PROFILE_REQUEST,
        userId,
    }),
    logout: () => ({ type: actionTypes.LOGOUT_SUCCESS }),
    resetAuthState: () => ({ type: actionTypes.RESET_AUTH_STATE }),
    refreshToken: () => ({ type: actionTypes.REFRESH_TOKEN }),
    handleNavbar: (status: boolean) => ({
        type: actionTypes.NAVBAR_STATUS,
        status,
    }),
};

const reducer: Reducer = ( state, action ) => {
    return {
        ...state,
    }
};

export default reducer;