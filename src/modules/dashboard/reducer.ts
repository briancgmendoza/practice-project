const actionTypes =  {
    GET_YESTERDAY: 'GET_YESTERDAY',
    ADD_YESTERDAY: 'ADD_YESTERDAY',
    GET_TODAY: 'GET_TODAY',
    ADD_TODAY: 'ADD_TODAY',
    DELETE: 'DELETE',
}

const initialState = {
    taskList: []
}

const getYesterday = (details: string) => {
    return {
        type: actionTypes.GET_YESTERDAY,
        details,
    }
}

const getToday = (details: string) => {
    return {
        type: actionTypes.GET_TODAY,
        details
    }
}
const reducer = ( state = initialState, action: any ) => {
    switch (action) {
        case actionTypes.GET_YESTERDAY:
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

export default reducer;