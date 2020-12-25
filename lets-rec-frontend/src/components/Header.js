import React from 'react';
import NavBar from '../components/NavBar'

import '../Header.css'

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
                <div className="nav-bar-div">
                    <NavBar/>
                </div>
                <img src={pic} alt="icon" className="log-in-pic"/>
                <h4 className="log-in">{username}</h4>
            </div> 
            :
            <div>   
            </div>
            }
        </div>
    )

}

export default Header