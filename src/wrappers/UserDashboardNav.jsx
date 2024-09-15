import React, { useEffect } from 'react';
import { Link, useLoaderData, Outlet, useNavigate } from 'react-router-dom';
import './UserDashboardNav.css';

const UserDashboardNav = () => {
    const user = useLoaderData();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            alert('You need to login first');
            setTimeout(() => {
                navigate('/login');
            }, 500);
        }
    }, [user]);

    return (
        <>
            <nav>
                <Link to="/dashboard">Dashboard</Link>
                <ul>
                    <li>
                        <Link>{`Welcome ${user ? user.email : ''}`}</Link>
                    </li>
                    <li>
                        <Link to="/logout">Logout</Link>
                    </li>
                </ul>
            </nav>
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default UserDashboardNav;
