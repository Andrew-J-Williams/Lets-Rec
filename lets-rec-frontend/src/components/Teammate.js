import React from 'react';

class Teammate extends React.Component {

    getTeamMembers = (state, info) => {
        let teamsArray = []

        state.map(team => {
            if(team.users.includes(info)){
                teamsArray.push(team)
            }    
        })

        console.log(teamsArray)

        const getMembers = teamsArray.map(team => team.members)
        const teammates = (getMembers.reduce(function(a, b){return a + b;}, 0) - teamsArray.length)
        console.log(teammates)
        return teammates
    }

    render(){
        const teammateInfo = this.props.location.info
        const teammateTeams = this.props.location.teams
        console.log(teammateInfo)
        console.log(teammateTeams) 
        
        return(
            <div className="profile-container">
                <div className="info-box">
                    <h1 className="profile-username">{teammateInfo.username}</h1>
                    <h4 className="profile-teams"><b></b> teams</h4>
                    <h4 className="profile-teammates"><b>{this.getTeamMembers(teammateTeams, teammateInfo)}</b> teammates</h4>
                    <h4 className="profile-email">{teammateInfo.email}</h4>
                    <img src="https://www.clipartkey.com/mpngs/m/60-606769_icons-computer-mail-email-address-free-frame-email.png" alt="email-icon" className="email-icon"/>
                </div>
                <div className="profile-pic-container">
                    <img src={teammateInfo.picture} alt="Profile Pic" className="profile-pic"/>
                </div>
            </div>
        )
    }


}


export default Teammate