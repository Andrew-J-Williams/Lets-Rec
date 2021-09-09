import React from 'react';
import { NavLink } from 'react-router-dom';

import '../css/Header.css'
import '../css/NavBar.css'

const Header = () => {

    let loggedIn = localStorage.currentUser
    let username = localStorage.username
    let pic = localStorage.pic

    return(
        <div className="header">
            <a href="/home">  
                <img src="https://i.imgur.com/eux2ezM.png" alt="Logo.png" className="logo"/>
            </a>
            { loggedIn ? 
            <div>
                <h4 className="log-in">{username}</h4>
                <img src={pic} alt="icon" className="log-in-pic"/>
                <NavLink to="/teams" className="teams-icon"><img src="https://i.imgur.com/xj9gjPC.png" className="icon-set" alt="jersey-icon"/></NavLink>
                <NavLink to="/profile" className="profile-icon"><img src="https://i.imgur.com/VKSizY2.jpg" className="icon-set" id="profile-icon" alt="profile-icon"/></NavLink>
                <NavLink to="/" className="home-icon"><img src="https://i.imgur.com/jsHS4EM.png" className="icon-set" id="home-icon" alt="home-icon"/></NavLink>
            </div> 
            :
            <div>   
            </div>
            }
        </div>
    )

}

export default Header