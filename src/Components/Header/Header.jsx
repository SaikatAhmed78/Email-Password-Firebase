import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const links = <>
        <li><NavLink to="/" className="nav-link">Home</NavLink></li>
        <li><NavLink to="/login" className="nav-link">Login</NavLink></li>
        <li><NavLink to="/register" className="nav-link">Register</NavLink></li>
        <li><NavLink to="/signup" className="nav-link">Sign Up</NavLink></li>
    </>;

    return (
        <div className="navbar bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-4 shadow-lg fixed max-w-5xl top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-gradient-to-r from-purple-500 to-indigo-500 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-2xl font-bold">FitLife</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-4">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-outline btn-white">Join Now</a>
            </div>
        </div>
    );
};

export default Header;
