import { Reducer } from 'redux';
import { TasksState } from './interface';
export const actionTypes =  {
    GET_TASK_REQUEST: 'GET_TASK_REQUEST',
    GET_TASK_SUCCESS: 'GET_TASK_SUCCESS',
    GET_TASK_FAILED: 'GET_TASK_FAILED',

    CREATE_TASK_REQUEST: 'CREATE_TASK_REQUEST',
    CREATE_TASK_SUCCESS: 'CREATE_TASK_SUCCESS',
    CREATE_TASK_FAILED: 'CREATE_TASK_FAILED',

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
    })
}

const initialState: TasksState = {
    actionTypes: '',
    isLoading: false,
    tasks: {
        task_yesterday: 'InitialState_yesterday',
        task_today: 'InitialState_today',
        blocker: 'InitialState_blocker',
        id: 0
    }
}

const dashboardReducer: Reducer<TasksState> = ( state = initialState, action ) => {
    switch (action.type) {
        case actionTypes.GET_TASK_REQUEST:
        case actionTypes.CREATE_TASK_REQUEST:
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
                ...state
            }
            
        case actionTypes.GET_TASK_FAILED:
        case actionTypes.CREATE_TASK_FAILED:
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
console.log('@reducer, ', actionCreators.getTask);

export default dashboardReducer;