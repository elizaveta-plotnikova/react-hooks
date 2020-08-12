import React, { useContext } from 'react';
import {NavLink} from 'react-router-dom';
import { GitHubContext } from '../context/github/gitHubContext';


const Card = ({user}) => {
    console.log('card users', {user});

    return (
        <div className="col mb-4" style={{maxWidth: 540 + 'px'}}>
            <div className="card">
                <div className="col-md-8">
                    <div className="card-body">
                        <h5>{user.login}</h5>
                        <div style={{minWidth: 150 + 'px'}, {maxWidth: 150 + 'px'}}>
                            <img src={user.avatar_url} className="card-img" alt="..." />
                        </div>
                        <div style={{marginTop: 20 + 'px'}}>
                            <NavLink className="btn btn-primary" to={'/profile' + user.id}>Show profile</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;