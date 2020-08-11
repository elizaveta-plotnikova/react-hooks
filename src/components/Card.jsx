import React from 'react';
import {NavLink} from 'react-router-dom';


const Card = () => (
    <div class="col mb-4" style={{maxWidth: 540 + 'px'}}>
        <div class="card">
            <div class="col-md-4">
                <img src="..." class="card-img" alt="..." />
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">User Name</h5>
                    <p class="card-text">This is a wider card with supporting text beloditionals bit longer.</p>
                    <NavLink className="btn btn-primary" to={'/profile'}>Show profile</NavLink>
                </div>
            </div>
        </div>
    </div>
)

export default Card;