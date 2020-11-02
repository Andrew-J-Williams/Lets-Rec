import React from 'react';

import '../Header.css'

const Header = () => {

    let loggedIn = localStorage.currentUser
    let username = localStorage.username
    let pic = localStorage.pic
    console.log(pic)

    return(
        <div className="header">
            <a href="/">  
                <img src="https://i.imgur.com/TLLRHSM.png" alt="Logo.png" className="logo"/>
            </a>
            { loggedIn ? 
            <div>
                <img src={pic} alt="icon" className="log-in-pic"/>
                <h4 className="log-in">{username}</h4>
            </div> 
            :
            <a href="/login">
                <img src="https://www.shareicon.net/data/512x512/2017/02/09/878607_lock_512x512.png" alt="Log In" className="log-in-lock"/>
                <h4 className="log-in">Log In</h4>
            </a> 
            }
        </div>
    )

}

export default Header