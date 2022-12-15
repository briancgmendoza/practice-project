import { taskLogState } from './interface';

export const actionTypes =  {
    GET_TASK_START: 'GET_TASK_START',
    GET_TASK_SUCCESS: 'GET_TODAY_SUCCESS',
    GET_TASK_ERROR: 'GET_TASK_ERROR'
};

const initialState = {
    taskLog: [],
    loading: false
} as taskLogState;

export const getTaskStart = () => ({
    type: actionTypes.GET_TASK_START,
});

export const getTaskSuccess = (taskLog: string) => ({
    type: actionTypes.GET_TASK_SUCCESS,
    payload: taskLog,
});

export const getTaskError = (error: string) => ({
    type: actionTypes.GET_TASK_ERROR,
    payload: error,
});

const dashboardReducer = ( state = initialState, action: any ) => {
    switch (action) {
        case actionTypes.GET_TASK_START:
            return {
                ...state,
                display: action.payload
            }
        case actionTypes.GET_TASK_SUCCESS:
            return {
                ...state,
                display: action.payload
            };
        case actionTypes.GET_TASK_ERROR:
            return {
                ...state,
                display: action.payload
            };
        default:
            return state;
    };
};

export default dashboardReducer;