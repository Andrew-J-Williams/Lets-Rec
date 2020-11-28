import React from 'react';
import { connect } from 'react-redux';

import TeamPosts from '../components/TeamPosts'

import { fetchTeam } from '../actions/fetchTeam'

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
                    <h1>{teamObject.name}</h1>
                    <h2>{teamObject.location}</h2>
                    <h2>{teamObject.users.length} Members</h2>
                    <h3>Sport: {teamObject.sport}</h3>
                    <h3>Venue: {teamObject.venue}</h3>
                    <h3>Time Slot: {teamObject.timeslot}</h3>

                    {teamObject.users.map(user => {
                        return(
                            <div key={user.id}>
                                <h4>{user.username}</h4>
                            </div>
                        )
                    })}
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
