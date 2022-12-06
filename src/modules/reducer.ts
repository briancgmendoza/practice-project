import { Reducer } from 'redux';
import {AuthState } from './interface';
import { deleteToken, setToken } from '../utils/token';
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

const initialState = {
    isAuthenticated: false,
    isLoading: false,
    profile: {
        firstname: '',
        email: '',
        lastLogin: '',
        registrationDate: '',
        authorities: [],
    },
    error: null,
};

const reducer = ( state = initialState, action: any ) => {
    switch (action.type) {
        case actionTypes.LOGIN_REQUEST:
        case actionTypes.GOOGLE_LOGIN_REQUEST:
        case actionTypes.GET_PROFILE_REQUEST:
        case actionTypes.REFRESH_TOKEN:
            return { ...state, isLoading: true, error: null };
        case actionTypes.LOGOUT_SUCCESS:
            deleteToken();
            return initialState;
        case actionTypes.LOGIN_SUCCESS:
        case actionTypes.GOOGLE_LOGIN_SUCCESS:
            setToken(action.data.accessToken, action.data.refreshToken);
            return {
                ...state,
                profile: action.data,
                isAuthenticated: true,
                isLoading: false,
            };
        case actionTypes.REFRESH_TOKEN_SUCCESS:
            return { ...state, isLoading: false, errors: null };
        case actionTypes.GET_PROFILE_SUCCESS:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    assignedLocations: action.data.assignedLocations,
                    hubmRole: action.data.role,
                },
                isLoading: false,
            };
        case actionTypes.GET_PROFILE_FAILED:
            return {
                ...state,
                profile: initialState.profile,
                isLoading: false,
            };
        case actionTypes.LOGIN_FAILED:
        case actionTypes.GOOGLE_LOGIN_FAILED:
            return { ...state, error: action.error, isLoading: false };
        case actionTypes.RESET_AUTH_STATE:
            return {
                ...initialState,
            };
        case actionTypes.NAVBAR_STATUS:
            return {
                ...state,
                navbar: action.status,
            };
        default:
            return state;
    }
};

export default reducer;