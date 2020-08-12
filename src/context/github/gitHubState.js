import React, { useReducer } from 'react';
import axios from 'axios';
import { gitHubReducer } from './gitHubReducer';
import { GitHubContext } from './gitHubContext';
import { CLEAR_USERS, GET_USER, GET_REPOS, SEARCH_USERS, SET_LOADING } from '../types';

export const GitHubState = ({children}) => {
    const initialState = {
        user: {},
        users: [],
        repos: [],
        isLoading: false
    }

    const [state, dispatch] = useReducer(gitHubReducer, initialState);
    const { users, repos, user, isLoading } = state;

    const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
    const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

    const search = async value => {
        setLoading();

        const response = await axios.get(
            `https://api.github.com/search/users?q=${value}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
        )

        dispatch({
            type: SEARCH_USERS,
            payload: response.data.items
        });
    }

    const getRepos = async name => {
        setLoading();

        const response = await axios.get(
            `https://api.github.com/users/${name}/repos?per_page=10&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
        )

        dispatch({
            type: GET_REPOS,
            payload: []
        });
    }

    const getUser = async name => {
        setLoading();

        const response = await axios.get(
            `https://api.github.com/users/${name}/repos?per_page=10&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
        )

        dispatch({
            type: GET_USER,
            payload: response.data
        });
    }

    const clearUsers = () => {
        dispatch({type: CLEAR_USERS});
    }

    const setLoading = () => {
        dispatch({type: SET_LOADING});
    }

    

    return (
        <GitHubContext.Provider value={{
            clearUsers, search, getRepos, getUser,
            users, repos, user, isLoading
        }}>
            {children}
        </GitHubContext.Provider>
    )
}