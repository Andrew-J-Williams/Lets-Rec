import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
      <div>
        <NavLink to="/users">
            Users
        </NavLink>
        <NavLink to="/login">
            Log In
        </NavLink>
      </div>
    );
  }
  
  export default NavBar;
  