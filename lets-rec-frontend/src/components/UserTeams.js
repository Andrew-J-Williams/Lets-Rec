import React from 'react';

import '../UserTeams.css'

class UserTeams extends React.Component {

    render(){
        const teamsArray = this.props.teams
        const userName = localStorage.username
        const userTeams = JSON.parse(localStorage.getItem('teams'))
        const userTeamsIds = userTeams.map(team => team.id)

    return(
        <div>
            <h2 className="user-teams-title">My Teams</h2>
            {teamsArray.map(team => {
                if (userTeamsIds.includes(team.id)){
                    return(
                    <div key={team.id}>
                        <h4>{team.name}</h4>
                    </div>
                    )
                }
            })}
        </div>
    )
    }

}

export default UserTeams