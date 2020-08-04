import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
    <nav className={"navbar navbar-expand-lg navbar-light bg-light"}>
        <a className="navbar-brand" href="/">GitSearch</a>
        <ul className={"navbar-nav"}>
            <li className={"nav-item"}>
                <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className={"nav-item"}>
                <NavLink className="nav-link" to="/info">Info</NavLink>
            </li>
        </ul>
    </nav>
);

export default Navbar;