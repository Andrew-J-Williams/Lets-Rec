import React from 'react';
import { Link } from 'react-router-dom';

import '../UserTeams.css'

class UserTeams extends React.Component {

    displayCreator(){
        const findTeamsContainer = document.getElementById("find-teams-container")
        const teamCreatorContainer = document.getElementById("team-creator-container")
        const teamButton = document.getElementById("create-team-button")

        findTeamsContainer.hidden = true
        teamCreatorContainer.hidden = false
        teamButton.style.display = "none"
    }


    render(){
        const userTeams = JSON.parse(localStorage.getItem('teams'))
        const userTeamsArray = []
        userTeams.forEach(team => {userTeamsArray.push(team.id)})

    return(
        <div className="user-teams-container">
            <h4 className="user-teams-title">My Teams</h4>
            {this.props.teams.map(team => {
                if (userTeamsArray.includes(team.id)){
                    console.log(team)
                    let backSRC = ''

                    if(team.sport === "Basketball"){
                        backSRC = "https://www.slideteam.net/wp/wp-content/uploads/2016/05/Graidient-4-690x518.png"
                    }
                    else if (team.sport === "Volleyball"){
                        backSRC = "https://i.pinimg.com/originals/f3/a6/78/f3a678ae9a35493a25fcaeb3aeb061c2.png"
                    }
                    else if (team.sport === "Football"){
                        backSRC = "https://hdwallpaperim.com/wp-content/uploads/2017/08/31/148324-orange-gradient-748x421.jpg"
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
                                {team.users.map(user => {
                                    let userInfo = {
                                        pathname: `/users/${user.id}`,
                                        info: user,
                                        teams: this.props.teams
                                    }

                                    if (user.id === parseInt(localStorage.currentUser, 10)){
                                        return(
                                            <Link to={`/profile`} query={user}><li key={user.id} className="member-li"><img src={user.picture} alt="member-bubble" className="member-circle"/></li></Link>
                                        )
                                    } else {
                                        return(
                                            <Link to={userInfo}><li key={user.id} className="member-li"><img src={user.picture} alt="member-bubble" className="member-circle"/></li></Link>
                                        )    
                                    }
                                }    
                                )}
                            </ul>
                        </div>
                    </div>
                    )
                }
                return true 
            })}
        </div>
    )
    }

}

export default UserTeams