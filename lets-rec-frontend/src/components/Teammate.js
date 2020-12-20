import React from 'react';

class Teammate extends React.Component {

    getTeams = (state, info, variable) => {
        let membersArray = []
        let userTeams = []

        state.map(team => {
            membersArray.push(team.users)
        })

        console.log(membersArray)

        membersArray.map(member => 
            member.forEach(user => {
                if(user.id === info.id){
                    console.log(user)
                    userTeams.push(user)
                }
            })    
        ) 
        return userTeams.length
    }

    getTeamMembers = (teams, info) => {
        let teamIdArray = []
        let membersSum = []
        let i

        teams.map(team => team.users.map(user => {
            if(user.id === info.id){
                teamIdArray.push(team.id)
            }
        }))
        console.log(teamIdArray)

        for(i=0; i < teams.length; i++){
            if(teamIdArray.includes(teams[i].id)){
                membersSum.push(teams[i].members)
            }
        }

        let sumArray = membersSum.reduce((a, b) => a + b, 0)

        return sumArray - membersSum.length
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
                    <h4 className="profile-teams"><b>{this.getTeams(teammateTeams, teammateInfo)}</b> teams</h4>
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