import { Reducer } from 'redux';
import { TasksState } from './interface';
export const actionTypes =  {
    GET_TASK_REQUEST: 'GET_TASK_REQUEST',
    GET_TASK_SUCCESS: 'GET_TASK_SUCCESS',
    GET_TASK_FAILED: 'GET_TASK_FAILED',

    RESET_ACTION: 'RESET_ACTION'
};

export const actionCreators = {
    getTask: () => ({
        type: actionTypes.GET_TASK_REQUEST
    }),
    resetAction: () => ({
        type: actionTypes.RESET_ACTION
    })
}

const initialState: TasksState = {
    actionTypes: '',
    isLoading: false,
    tasks: {
        task_yesterday: '',
        task_today: '',
        blocker: '',
        id: 0
    }
}

const dashboardReducer: Reducer<TasksState> = ( state = initialState, action ) => {
    switch (action.type) {
        case actionTypes.GET_TASK_REQUEST:
            return { ...state, isLoading: true };

        case actionTypes.GET_TASK_SUCCESS:
            return {
                ...state,
                tasks: action.data,
                isLoading: false,
                actionTypes: action.type
            };

        case actionTypes.GET_TASK_FAILED:
            return {
                ...state,
                error: action.err,
                isLoading: false,
            };

        case actionTypes.RESET_ACTION:
            return {
                ...state,
                tasks: {
                    task_yesterday: '',
                    task_today: '',
                    blocker: '',
                    id: 0
                },
                isLoading: false,
                actionTypes: ''
            }
        default:
            return state;
    };
};

export default dashboardReducer;