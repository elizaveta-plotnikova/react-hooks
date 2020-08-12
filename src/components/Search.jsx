import React from 'react';
import { useContext } from 'react';
import { AlertContext } from '../context/alert/alertContext';
import { useState } from 'react';
import { GitHubContext } from './../context/github/gitHubContext';
 
const Search = () => {
    const {show, hide} = useContext(AlertContext);
    const github = useContext(GitHubContext);
    const [value, setValue] = useState('');

    const btnHandler = () => {
        if (value !== '') {
            github.search(value); 
        } else {
            show('Input is empty. Please, write something!');
        }
    }

    return (
        <div className="input-group mb-3">
            <input 
                type="text" 
                className="form-control" 
                placeholder="Start searching" 
                aria-describedby="button-addon2"
                onClick={hide}
                onChange={(event) => setValue(event.target.value)}
                // onKeyPress={onSubmit}
            />
            <div className="input-group-append">
                <button 
                    className="btn btn-outline-secondary" 
                    type="button" 
                    id="button-addon2"
                    onClick={btnHandler}
                >Button</button>
            </div>
        </div>
    )

    
}

export default Search;