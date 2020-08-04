import React from 'react';
 
const Search = () => (
    <div className="input-group mb-3">
        <input 
            type="text" 
            className="form-control" 
            placeholder="Start searching" 
            aria-describedby="button-addon2"
        />
        <div className="input-group-append">
            <button 
                className="btn btn-outline-secondary" 
                type="button" 
                id="button-addon2"
            >Button</button>
        </div>
    </div>
)

export default Search;