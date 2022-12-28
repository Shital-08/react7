import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div id="Nav">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/Students" className="nav-link">Students</NavLink>
            <NavLink to="/Contact" className="nav-link">Contact Us</NavLink>
        </div>
    );
}

export default Navbar;