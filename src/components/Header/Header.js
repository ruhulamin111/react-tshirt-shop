import React from 'react';
import './Header.css';
import { NavLink } from "react-router-dom";

const Header = () => {
    const navActive = ({ isActive }) => {
        return {
            textDecoration: isActive ? 'underline' : '',
            color: isActive ? 'yellow' : '',
        }
    }

    return (
        <div>
            <header>
                <nav>
                    <div>
                        <h2>T-Shirt Shop</h2>
                    </div>
                    <div>
                        <NavLink style={navActive} to='/home'>Home</NavLink>
                        <NavLink style={navActive} to='/orders'>Orders</NavLink>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;