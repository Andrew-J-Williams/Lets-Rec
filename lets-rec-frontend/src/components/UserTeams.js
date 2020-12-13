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
            <h2 className="user-teams-title">Teams</h2>
            {this.props.teams.map(team => {
                if (userTeamsArray.includes(team.id)){
                    console.log(team)
                    let backSRC = ''

                    if(team.sport === "Basketball"){
                        backSRC = "https://i.imgur.com/4bZ7Q4f.png"
                    }
                    else if (team.sport === "Volleyball"){
                        backSRC = "https://i.imgur.com/1CaO0Ad.png"
                    }
                    else if (team.sport === "Football"){
                        backSRC = "https://i.imgur.com/k6cGaRb.png"
                    }
                    else if (team.sport === "Baseball"){
                        backSRC = "https://i.imgur.com/YGeHFxs.png"
                    }
                    else {
                        backSRC = "https://www.goyder.sa.gov.au/__data/assets/image/0030/544773/sports.jpg"
                    }

                    return(
                    <div key={team.id} className="team-container">
                        <div className="team-circle">
                            <img src={backSRC} className="team-background" alt="background"/>
                            <Link to={`teams/${team.id}`}><h3 className="team-name">{team.name}</h3></Link>
                            <h5 className="team-classification">{team.sport} League • {team.members} members</h5>
                        </div>
                        <div key={team.id} className="members-circle">
                            <ul className="members-list">
                                {team.users.map(user => 
                                    <li key={user.id} className="member-li"><img src={user.picture} alt="member-bubble" className="member-circle"/></li>    
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