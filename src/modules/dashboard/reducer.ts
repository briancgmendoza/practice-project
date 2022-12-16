import { taskLogState } from './interface';

export const actionTypes =  {
    GET_TASK_START: 'GET_TASK_START',
    GET_TASK_SUCCESS: 'GET_TODAY_SUCCESS',
    GET_TASK_ERROR: 'GET_TASK_ERROR',

    CREATE_TASK_START: 'CREATE_TASK_START',
    CREATE_TASK_SUCCESS: 'CREATE_TASK_SUCCESS',
    CREATE_TASK_ERROR: 'CREATE_TASK_ERROR'
};

const initialState = {
    taskLog: <any>[],
    loading: false
} as unknown as taskLogState;

export const getTasksStart = () => ({
    type: actionTypes.GET_TASK_START,
});

export const getTasksSuccess = (taskLog: string) => ({
    type: actionTypes.GET_TASK_SUCCESS,
    payload: taskLog,
});

export const getTasksError = (error: string) => ({
    type: actionTypes.GET_TASK_ERROR,
    payload: error,
});

export const createTaskStart = (taskLog: string) => ({
    type: actionTypes.CREATE_TASK_START,
    payload: taskLog
});

export const createTaskSuccess = () => ({
    type: actionTypes.CREATE_TASK_SUCCESS,
});

export const createTaskError = (error: string) => ({
    type: actionTypes.CREATE_TASK_ERROR,
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