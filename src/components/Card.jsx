import React from 'react';
import {NavLink} from 'react-router-dom';


const Card = () => (
    <div className="col mb-4" style={{maxWidth: 540 + 'px'}}>
        <div className="card">
            <div className="col-md-4">
                <img src="..." className="card-img" alt="..." />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">User Name</h5>
                    <p className="card-text">This is a wider card with supporting text beloditionals bit longer.</p>
                    <NavLink className="btn btn-primary" to={'/profile'}>Show profile</NavLink>
                </div>
            </div>
        </div>
    </div>
)

export default Card;