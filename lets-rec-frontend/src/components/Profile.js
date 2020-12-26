import React from 'react';
import { connect } from 'react-redux';
import { logUserOut } from '../actions/logoutUser'

import '../Profile.css'


class Profile extends React.Component {

    getTeamMembers = (state) => {
        const getMembers = state.map(team => team.members)
        const teammates = (getMembers.reduce(function(a, b){return a + b;}, 0) - state.length)
        return teammates
    }

    logOut = event => {
        event.preventDefault()
        this.props.logUserOut()
    }

   
    render() {
        let loggedIn = parseInt(localStorage.currentUser, 10) && localStorage.username && localStorage.email && localStorage.teams && localStorage.pic

        if (loggedIn){
        return (
        
        <div className="profile-container">
            <div className="info-box">
                <h1 className="profile-username">{localStorage.username}</h1>
                <h4 className="profile-teams"><b>{JSON.parse(localStorage.getItem('teams')).length}</b> teams</h4>
                <h4 className="profile-teammates"><b>{this.getTeamMembers(JSON.parse(localStorage.getItem('teams')))}</b> teammates</h4>
                <h4 className="profile-email">{localStorage.email}</h4>
                <img src="https://www.clipartkey.com/mpngs/m/60-606769_icons-computer-mail-email-address-free-frame-email.png" alt="email-icon" className="email-icon"/>
            </div>
            <div className="profile-pic-container">
                <img src={localStorage.pic} alt="Profile Pic" className="profile-pic"/>
            </div>
            <h5 type="submit" className="log-out-button" onClick={this.logOut}><b>Log Out</b></h5> 
        </div>
        
        )
        } else {
            window.location.replace('http://localhost:3001/login')
        }
    }
}

export default connect(null, {logUserOut})(Profile)

