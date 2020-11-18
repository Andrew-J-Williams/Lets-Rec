import React from 'react';

import { Link } from 'react-router-dom';

import '../UserTeams.css'

class UserTeams extends React.Component {

    render(){
        const teamsArray = this.props.teams
        console.log(teamsArray)
        const userTeams = JSON.parse(localStorage.getItem('teams'))
        console.log(userTeams)
        const userTeamsArray = []
        userTeams.forEach(team => {userTeamsArray.push(team.id)})

    return(
        <div className="user-teams-container">
            <h2 className="user-teams-title">My Teams</h2>
            {this.props.teams.map(team => {
                if (userTeamsArray.includes(team.id)){
                    return(
                    <div key={team.id} className="team-container">
                        <div className="team-circle">
                            <h3 className="team-name"><Link to={`/teamspage/${team.id}`}>{team.name}</Link></h3>
                            <h5>{team.sport}</h5>
                        </div>
                        <div key={team.id} className="members-circle">
                            <ul>
                                {team.users.map(user => 
                                    <li key={user.id}><img src={user.picture} alt="member-bubble" className="member-circle"/></li>    
                                )}
                            </ul>
                        </div>
                    </div>
                    )
                }
            })}
        </div>
    )
    }

}

export default UserTeams