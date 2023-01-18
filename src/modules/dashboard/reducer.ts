import { Reducer } from 'redux';
import { TasksState, taskLog } from './interface';
export const actionTypes =  {
    GET_TASK_REQUEST: 'GET_TASK_REQUEST',
    GET_TASK_SUCCESS: 'GET_TASK_SUCCESS',
    GET_TASK_FAILED: 'GET_TASK_FAILED',

    CREATE_TASK_REQUEST: 'CREATE_TASK_REQUEST',
    CREATE_TASK_SUCCESS: 'CREATE_TASK_SUCCESS',
    CREATE_TASK_FAILED: 'CREATE_TASK_FAILED',

    DELETE_TASK_REQUEST: 'DELETE_TASK_REQUEST',
    DELETE_TASK_SUCCESS: 'DELETE_TASK_SUCCESS',
    DELETE_TASK_FAILED: 'DELETE_TASK_FAILED',

    UPDATE_TASK_REQUEST: 'UPDATE_TASK_REQUEST',
    UPDATE_TASK_SUCCESS: 'UPDATE_TASK_SUCCESS',
    UPDATE_TASK_FAILED: 'UPDATE_TASK_FAILED',

    SELECTED_TASK_REQUEST: 'SELECTED_TASK_REQUEST',
    SELECTED_TASK_SUCCESS: 'SELECTED_TASK_SUCCESS',
    SELECTED_TASK_FAILED: 'SELECTED_TASK_FAILED',

    RESET_ACTION: 'RESET_ACTION'
};

export const actionCreators = {
    getTask: () => ({
        type: actionTypes.GET_TASK_REQUEST,
    }),
    resetAction: () => ({
        type: actionTypes.RESET_ACTION
    }),
    createTask: (taskLog: any) => ({
        type: actionTypes.CREATE_TASK_REQUEST,
        payload: taskLog
    }),
    deleteTask: (id: undefined | number) => ({
        type: actionTypes.DELETE_TASK_REQUEST,
        id
    }),
    updateTask: (id: undefined | number) => ({
        type: actionTypes.UPDATE_TASK_REQUEST,
        id
    }),
    selectedTask: (taskLog: taskLog) => ({
        type: actionTypes.SELECTED_TASK_REQUEST,
        payload: taskLog
    })
}

const initialState: TasksState = {
    actionTypes: '',
    isLoading: false,
    tasks: [{
        task_yesterday: '@reducer_InitialState_yesterday',
        task_today: '@reducer_InitialState_today',
        blocker: '@reducer_InitialState_blocker',
        id: 0
    }],
    tasksUpdate: {
        task_yesterday: '@reducer_InitialState_yesterday',
        task_today: '@reducer_InitialState_today',
        blocker: '@reducer_InitialState_blocker',
        id: 0
    }
}

const dashboardReducer: Reducer<TasksState> = ( state = initialState, action ) => {
    switch (action.type) {
        case actionTypes.GET_TASK_REQUEST:
        case actionTypes.CREATE_TASK_REQUEST:
        case actionTypes.UPDATE_TASK_REQUEST:
        case actionTypes.DELETE_TASK_REQUEST:
        case actionTypes.SELECTED_TASK_REQUEST:
            return { ...state, isLoading: true };

        case actionTypes.GET_TASK_SUCCESS:
            return {
                ...state,
                tasks: action.data,
                isLoading: false,
                actionTypes: action.type,
            };
        
        case actionTypes.CREATE_TASK_SUCCESS:
            return {
                ...state,
                isLoading: false,
            }
        
        case actionTypes.UPDATE_TASK_SUCCESS:
            return {
                ...state,
                tasksUpdate: action.data,
                isLoading: false
            }
        
        case actionTypes.SELECTED_TASK_SUCCESS:
            return {
                ...state,
                isLoading: false
            }

        case actionTypes.DELETE_TASK_SUCCESS:
            return {
                ...state,
                isLoading: false,
            }
            
        case actionTypes.GET_TASK_FAILED:
        case actionTypes.CREATE_TASK_FAILED:
        case actionTypes.UPDATE_TASK_FAILED:
        case actionTypes.DELETE_TASK_FAILED:
        case actionTypes.SELECTED_TASK_FAILED:
            return {
                ...state,
                error: action.err,
                isLoading: false,
            };

        case actionTypes.RESET_ACTION:
            return {
                ...state,
                isLoading: false,
                actionTypes: ''
            }

        default:
            return state;
    };
};

export default dashboardReducer;