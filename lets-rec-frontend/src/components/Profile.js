import React from 'react';

import '../Profile.css'
import { logUserOut } from '../actions/logoutUser'

const Profile = (props) => {

    console.log(props.info)

    console.log(localStorage.currentUser)

    const userInfo = props.info
    const userName = userInfo.username
    const userEmail = userInfo.email
    const userPicture = userInfo.picture
    const userTeams = userInfo.teams
    const members = userTeams.map(team => team.members)
    const teammates = (members.reduce(function(a, b){return a + b;}, 0) - userTeams.length)

    const loggedIn = localStorage.currentUser

    return (
        <div className="profile-container">
            <form onSubmit={logUserOut}>
            <div className="info-box">
                <h1 className="profile-username">{userName}</h1>
                <h4 className="profile-teams"><b>{userTeams.length}</b> teams</h4>
                <h4 className="profile-teammates"><b>{teammates}</b> teammates</h4>
                <h4 className="profile-email">{userEmail}</h4>
                <img src="https://www.clipartkey.com/mpngs/m/60-606769_icons-computer-mail-email-address-free-frame-email.png" alt="email-icon" className="email-icon"/>
            </div>
            <div className="profile-pic-container">
                <img src={userPicture} alt="Profile Pic" className="profile-pic"/>
            </div>
            {loggedIn ? <h5 type="submit" className="log-out-button"><b>Log Out</b></h5> : <p>Home</p>}
            </form>
        </div>
    )
}

export default Profile