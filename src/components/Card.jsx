import React, {useState, useEffect, useCallback} from 'react';


class A extends React.PureComponent {}

const Card = () => (
    <div className="card-body border">
        <img className="card-body__img"></img>
        <h5 className="card-body__title">User Name</h5>
        <div className="card-body__description"></div>
        <button type="button" className="btn btn-secondary">Show profile</button>
    </div>
)

export default Card;