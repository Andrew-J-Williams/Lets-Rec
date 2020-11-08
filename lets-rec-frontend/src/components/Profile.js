import React from 'react';
import { connect } from 'react-redux';
import { logUserOut } from '../actions/logoutUser'


import '../Profile.css'


class Profile extends React.Component {

    state = {
        id: localStorage.currentUser,
        username: localStorage.username,
        email: localStorage.email,
        teams: JSON.parse(localStorage.getItem('teams')),
        picture: localStorage.pic
    }

    getTeamMembers = (state) => {

        const getMembers = state.map(team => team.members)
        const teammates = (getMembers.reduce(function(a, b){return a + b;}, 0) - state.length)
        return teammates
    }

    setUser = (state) => {
        const userId = parseInt(localStorage.currentUser, 10)

        if (state.id === userId){
            console.log("We have a match!")
        } else {
            console.log("Try again my friend!")
        }
    }

    logOut = event => {
        event.preventDefault()
        this.props.logUserOut()
    }

   
    render() {
        let loggedIn = parseInt(localStorage.currentUser, 10)


        return (
        <div className="profile-container">
            <div className="info-box">
                <h1 className="profile-username">{this.state.username}</h1>
                <h4 className="profile-teams"><b>{this.state.teams.length}</b> teams</h4>
                <h4 className="profile-teammates"><b>{this.getTeamMembers(this.state.teams)}</b> teammates</h4>
                <h4 className="profile-email">{this.state.email}</h4>
                <img src="https://www.clipartkey.com/mpngs/m/60-606769_icons-computer-mail-email-address-free-frame-email.png" alt="email-icon" className="email-icon"/>
            </div>
            <div className="profile-pic-container">
                <img src={this.state.picture} alt="Profile Pic" className="profile-pic"/>
            </div>
            {loggedIn ? <h5 type="submit" className="log-out-button" onClick={this.logOut}><b>Log Out</b></h5> : <p>Home</p>}
        </div>
        )
    }
}

export default connect(null, {logUserOut})(Profile)

/*
{loggedIn ? <h5 type="submit" className="log-out-button"><b>Log Out</b></h5> : <p>Home</p>}
*/