import React from 'react';
import { NavLink } from 'react-router-dom';

import '../NavBar.css'

const NavBar = () => {
    return (
      <div className="navbar">
        <ul>
            <li><NavLink to="/users" className="navlink">Users</NavLink></li>
            <li><NavLink to="/teams" className="navlink">Teams</NavLink></li>
        </ul>
      </div>
    );
  }
  
  export default NavBar;
  