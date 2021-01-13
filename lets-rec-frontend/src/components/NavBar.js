import React from 'react';
import { NavLink } from 'react-router-dom';

import '../NavBar.css'


const NavBar = () =>{
    return (
      <div className="navbar">
        <ul>
            <li><NavLink to="/" className="navlink"><img src="https://i.imgur.com/jsHS4EM.png" className="icon-set" id="home-icon" alt="home-icon"/></NavLink></li>
            <li><NavLink to="/profile" className="navlink"><img src="https://i.imgur.com/VKSizY2.jpg" className="icon-set" id="profile-icon" alt="profile-icon"/></NavLink></li>
            <li><NavLink to="/teams" className="navlink"><img src="https://i.imgur.com/xj9gjPC.png" className="icon-set" alt="jersey-icon"/></NavLink></li>
        </ul>
      </div>
    );
}
  
export default NavBar;
  