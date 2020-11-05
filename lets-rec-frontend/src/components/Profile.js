import React from 'react';
import { connect } from 'react-redux';
import { logUserOut } from '../actions/logoutUser'
import { fetchProfile } from '../actions/fetchProfile'
import '../Profile.css'


class Profile extends React.Component {

   
    state = {
        username: this.props.info.username,
        email: this.props.info.email,
        teams: this.props.info.teams,
        picture: this.props.info.picture,
        loggedIn: localStorage.currentUser
    }

    
    /*userInfo = props.info
    const userName = userInfo.username
    const userEmail = userInfo.email
    const userPicture = userInfo.picture
    const userTeams = userInfo.teams
    const members = userTeams.map(team => team.members)
    const teammates = (members.reduce(function(a, b){return a + b;}, 0) - userTeams.length)
    */

    handleClick = event => {
        event.preventDefault()
        localStorage.clear()
        this.props.logUserOut()
        window.location.reload()
    }

    render(){
    return (
        <div className="profile-container">
            <div className="info-box">
                <h1 className="profile-username">{this.state.username}</h1>
                <h4 className="profile-teams"><b>{this.state.teams.length}</b> teams</h4>
                
                <h4 className="profile-email">{this.state.email}</h4>
                <img src="https://www.clipartkey.com/mpngs/m/60-606769_icons-computer-mail-email-address-free-frame-email.png" alt="email-icon" className="email-icon"/>
            </div>
            <div className="profile-pic-container">
                <img src={this.state.picture} alt="Profile Pic" className="profile-pic"/>
            </div>
            {this.state.loggedIn ? <h5 type="submit" className="log-out-button" handleClick={this.handleClick}><b>Log Out</b></h5> : <p>Home</p>}
        </div>
    )
    }
}

export default connect(null, {logUserOut})(Profile)