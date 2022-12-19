import { taskLogState } from './interface';

export const actionTypes =  {
    GET_TASK_START: 'GET_TASK_START',
    GET_TASK_SUCCESS: 'GET_TODAY_SUCCESS',
    GET_TASK_ERROR: 'GET_TASK_ERROR',

    CREATE_TASK_START: 'CREATE_TASK_START',
    CREATE_TASK_SUCCESS: 'CREATE_TASK_SUCCESS',
    CREATE_TASK_ERROR: 'CREATE_TASK_ERROR',

    DELETE_TASK_START: 'DELETE_TASK_START',
    DELETE_TASK_SUCCESS: 'DELETE_TASK_SUCCESS',
    DELETE_TASK_ERROR: 'DELETE_TASK_ERROR',
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

export const createTaskStart = (taskLog: any) => ({
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

export const deleteTaskStart = (taskLogId: string) => ({
    type: actionTypes.DELETE_TASK_START,
    payload: taskLogId
});

export const deleteTaskSuccess = (taskLogId: string) => ({
    type: actionTypes.DELETE_TASK_SUCCESS,
    payload: taskLogId
});

export const deleteTaskError = (error: string) => ({
    type: actionTypes.DELETE_TASK_ERROR,
    payload: error,
});

const dashboardReducer = ( state = initialState, action: any ) => {
    switch (action) {
        case actionTypes.GET_TASK_START:
        case actionTypes.CREATE_TASK_START:
        case actionTypes.DELETE_TASK_START:
            return {
                ...state,
                display: action.payload
            }
        case actionTypes.GET_TASK_SUCCESS:
            return {
                ...state,
                display: action.payload
            };
        case actionTypes.CREATE_TASK_SUCCESS:
            return {
                ...state,
            }
        case actionTypes.DELETE_TASK_SUCCESS:
            return {
                ...state,
                display: state.taskLogId.filter((item: any) => item.id !== action.payload),
            }
        case actionTypes.GET_TASK_ERROR:
        case actionTypes.CREATE_TASK_ERROR:
        case actionTypes.DELETE_TASK_ERROR:
            return {
                ...state,
                display: action.payload
            };
        default:
            return state;
    };
};

export default dashboardReducer;