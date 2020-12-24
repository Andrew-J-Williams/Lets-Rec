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
                <a className="log-in-link" href="/login">
                    <img src="https://www.shareicon.net/data/512x512/2017/02/09/878607_lock_512x512.png" alt="Log In" className="log-in-lock"/>
                    <h4 className="log-in">Log In</h4>
                </a>
            </div>
            }
        </div>
    )

}

export default Header