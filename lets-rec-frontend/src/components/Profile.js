import React from 'react';

import '../Profile.css'

const Profile = (props) => {

    console.log(props.info)

    const userInfo = props.info
    const userName = userInfo.username
    const userPicture = userInfo.picture
    const userTeams = userInfo.teams

    return (
        <div className="profile-container">
            <div className="profile-pic-container">
                <img src={userPicture} alt="Profile Pic" className="profile-pic"/>
            </div>
            <h1 className="profile-username">{userName}</h1>
            <h4 className="profile-teams"><b>{userTeams.length}</b> teams</h4>
        </div>
    )
}

export default Profile