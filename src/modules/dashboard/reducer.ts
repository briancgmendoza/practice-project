const actionTypes =  {
    GET_TASK_YESTERDAY: 'GET_TASK_YESTERDAY',
    ADD_YESTERDAY: 'ADD_YESTERDAY',
    GET_TODAY: 'GET_TODAY',
    ADD_TODAY: 'ADD_TODAY',
    DISPLAY_DATA: 'DISPLAY_DATA',
    DELETE: 'DELETE',
};
 
// export const saveData = (task: string | null) => async dispatch => {
//     const data = localStorage.getItem('taskList') ? JSON.parse(localStorage.getItem('taskList')) : [];
// }


const initialState = {
    taskList: []
};

if (localStorage.getItem('taskList')) {
    // initialState.taskList = JSON.parse(localStorage.getItem('taskList'));
} else {
    initialState.taskList = [];
}

const getTaskYesterday = (details: string) => {
    return {
        type: actionTypes.GET_TASK_YESTERDAY,
        details,
    }
}

const getTaskToday = (details: string) => {
    return {
        type: actionTypes.GET_TODAY,
        details
    }
}
const dashboardReducer = ( state = initialState, action: any ) => {
    switch (action) {
        case actionTypes.DISPLAY_DATA:
            return {
                // taskList: [...action.payload],
                ...state,
                display: action.payload
            }
        case actionTypes.GET_TASK_YESTERDAY:
            return {
                ...state,
                yesterday: action.payload
            };
        case actionTypes.ADD_YESTERDAY:
            return {
                ...state,
                yesterday: action.payload
            };
        case actionTypes.GET_TODAY:
            return {
                ...state,
                today: action.payload
            };
        case actionTypes.ADD_TODAY:
            return {
                ...state,
                today: action.payload
            };
        default:
            return state;
    };
};

export default dashboardReducer;