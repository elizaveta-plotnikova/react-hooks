import { GET_REPOS, CLEAR_USERS, GET_USER, SEARCH_USERS, SET_LOADING } from "../types";

export const gitHubReducer = (state, action) => {
    switch (action.type) {
        case CLEAR_USERS: 
            return ({...state, users: [], isLoading: false});

        case GET_REPOS: 
            return ({...state, repos: [], isLoading: false});

        case GET_USER: 
            return ({...state, user: action.payload[0], isLoading: false});

        case SEARCH_USERS: 
            return ({...state, users: action.payload, isLoading: false});

        // case SET_LOADING: 
        //     return state => ({...state, isLoading: true});

        default: 
            return state;
    }
}

//Альтернативный вариант создания редюсера

// const handlers = {
//     [SEARCH_USERS]: (state, {payload}) => ({...state, users: payload, isLoading: false}),
//     DEFAULT: state => state
// }

// export const gitHubReducer = (state, action) => {
//     const handler = handlers[action.type] || handlers.DEFAULT;
//     return handler(state, action);
// }
