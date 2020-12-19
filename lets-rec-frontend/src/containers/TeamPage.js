import React from 'react';
import { connect } from 'react-redux';

import TeamPosts from '../components/TeamPosts'

import { fetchTeam } from '../actions/fetchTeam'

import '../TeamPage.css'

class TeamPage extends React.Component {
    

    componentDidMount(){
        const id = this.props.match.params.id
        this.props.fetchTeam(id)
    }

    onLoad(){
        let myValue = false

        if (! localStorage.pageVisit){
            localStorage.setItem("pageVisit", myValue);
            window.location.reload();
        } else if (localStorage.pageVisit === "false"){
            console.log("You've been on the Team's Page before!")
            window.location.reload();
            localStorage.pageVisit = true
        } 
    }

    render(){
        this.onLoad()
        const teamObject = this.props.team

        return(
            <div>
                <div className="team-info-container">
                    <div className="info-div">
                        <h1 className="info-name" id="team-page-name">{teamObject.name}</h1>
                        <h2 className="info-location">{teamObject.location} • {teamObject.sport} League</h2>
                        <h3>{teamObject.venue}</h3>
                        <h3>{teamObject.timeslot}</h3>
                    </div>
                    <div className="users-div">
                        <h2>{teamObject.users.length} Members</h2>
                        {teamObject.users.map(user => {
                            return(
                                <div key={user.id}>
                                    <img src={user.picture} className="team-user-pic" alt="user-pic"/>
                                    <h4 className="team-user-name">{user.username}</h4>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <TeamPosts team={this.props.team}/>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        team: state.teamsReducer.team
    }
}

export default connect(mapStateToProps, {fetchTeam})(TeamPage)
