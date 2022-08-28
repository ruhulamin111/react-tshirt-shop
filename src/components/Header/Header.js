import React from 'react';
import './Header.css';
import { NavLink } from "react-router-dom";

const Header = () => {
    const navActive = ({ isActive }) => {
        return {
            textDecoration: isActive ? 'underline' : '',
            color: isActive ? 'red' : '',
        }
    }

    return (
        <div>
            <nav>
                <NavLink style={navActive} to='/home'>Home</NavLink>
                <NavLink style={navActive} to='/orders'>Orders</NavLink>
            </nav>

        </div>
    );
};

export default Header;