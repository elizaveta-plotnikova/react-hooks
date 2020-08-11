import React, { useReducer } from 'react';
import { gitHubReducer } from './gitHubReducer';
import { gitHubContext } from './gitHubContext';
import { CLEAR_USERS, GET_USER, GET_REPOS, SEARCH_USERS, SET_LOADING } from '../types';

export const gitHubState = ({children}) => {
    const initialState = {
        user: {},
        users: [],
        repos: [],
        isLoading: false
    }

    

    const search = async value => {
        setLoading();
        //...

        dispach({
            type: SEARCH_USERS,
            payload: []
        });
    }

    const getRepos = async name => {
        setLoading();
        dispach({
            type: GET_REPOS,
            payload: []
        });
    }

    const getUser = async name => {
        setLoading();
        dispach({
            type: GET_USER,
            payload: []
        });
    }

    const clearUsers = () => {
        dispach({type: CLEAR_USERS});
    }

    const setLoading = () => {
        dispach({type: SET_LOADING});
    }

    const { users, repos, user, isLoading } = state;

    const [state, dispach] = useReducer(gitHubReducer, initialState);

    return (
        <gitHubContext.Provider value={{
            clearUsers, search, getRepos, getUser,
            users, repos, user, isLoading
        }}>
            {children}
        </gitHubContext.Provider>
    )
}