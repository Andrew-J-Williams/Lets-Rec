import React from 'react';

import '../Header.css'

const Header = () => {

    let loggedIn = localStorage.currentUser
    let username = localStorage.username

    return(
        <div className="header">
            <a href="/">  
                <img src="https://i.imgur.com/TLLRHSM.png" alt="Logo.png"className="logo"/>
            </a>
            { loggedIn ? <h4 className="log-in">Welcome, {username}!</h4> :
            <a href="/login">
                <img src="https://www.shareicon.net/data/512x512/2017/02/09/878607_lock_512x512.png" alt="Log In" className="log-in-lock"/>
                <h4 className="log-in">Log In</h4>
            </a> 
            }
        </div>
    )

}

export default Header