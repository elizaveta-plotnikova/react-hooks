import { GET_REPOS, CLEAR_USERS, GET_USER, SEARCH_USERS, SET_LOADING } from "../types";

export const gitHubReducer = (state, action) => {
    switch (action.type) {
        case CLEAR_USERS: return state => ({...state, users: [], isLoading: false});
        case GET_REPOS: return (state, {payload}) => ({...state, repos: [], isLoading: false});
        case GET_USER: return (state, {payload}) => ({...state, user: {}, isLoading: false});
        case SEARCH_USERS: return (state, {payload}) => ({...state, users: [], isLoading: false});
        case SET_LOADING: return state => ({...state, isLoading: true});
        default: return state;
    }
}