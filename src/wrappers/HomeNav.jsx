import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import './HomeNav.css'; 

const HomeNav = () => {
    return (
        <div>
            <nav>
                <Link to="/">Jobify</Link>
                <ul>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}

export default HomeNav;
