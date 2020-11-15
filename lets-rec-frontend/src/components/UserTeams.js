import React from 'react';

import '../UserTeams.css'

class UserTeams extends React.Component {

    render(){
        const teamsArray = this.props.teams
        const userName = localStorage.username
        const userTeams = JSON.parse(localStorage.getItem('teams'))
        const userTeamsIds = userTeams.map(team => team.id)

    return(
        <div className="user-teams-container">
            <h2 className="user-teams-title">My Teams</h2>
            {teamsArray.map(team => {
                if (userTeamsIds.includes(team.id)){
                    return(
                    <div key={team.id} className="team-container">
                        <div className="team-circle">
                            <h3 className="team-name">{team.name}</h3>
                            <h5>{team.sport}</h5>
                        </div>
                        <div className="members-circle">
                            <ul>
                                {team.users.map(user =>
                                    <li><img src={user.picture} alt="member-bubble" className="member-circle"/></li>    
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