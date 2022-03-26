import React from 'react'
import { Outlet, Link } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
  return (
    <>
    <nav >
      <ul className="topnav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
      </ul>
    </nav>

    <Outlet />
  </>
)
};


export default Navbar;