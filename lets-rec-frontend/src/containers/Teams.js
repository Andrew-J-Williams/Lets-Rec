import React from 'react';
import { connect } from 'react-redux';

import FindTeams from '../components/FindTeams'
import TeamCreator from '../components/TeamCreator'
import UserTeams from '../components/UserTeams'

import { fetchTeams } from '../actions/fetchTeams'

import '../Teams.css'

class Teams extends React.Component {

    componentDidMount(){
        this.props.fetchTeams()
    }

    onLoad(){
        let myValue = true

        if (! localStorage.pageVisit){
            localStorage.setItem("pageVisit", myValue);
            window.location.reload();
        } else if (localStorage.pageVisit === "true"){
            console.log("You've been here!")
            window.location.reload();
            localStorage.pageVisit = false
        } 
    }

    displayCreator(){
        const findTeamsContainer = document.getElementById("find-teams-container")
        const teamCreatorContainer = document.getElementById("team-creator-container")
        const teamButton = document.getElementById("create-team-button")

        findTeamsContainer.hidden = true
        teamCreatorContainer.hidden = false
        teamButton.style.display = "none"
    }

    render(){
        this.onLoad()
        return (
            <div className="main-teams-container">
                <UserTeams teams={this.props.teamsList}/>
                <FindTeams teams={this.props.teamsList}/>
                <h2 className="create-team-button" id="create-team-button" onClick={this.displayCreator}>Create a Team!</h2>
                <TeamCreator teams={this.props.teamsList}/>
            </div>
            
        )

    }
}

const mapStateToProps = (state) => {
    return {
        teamsList: state.teamsReducer.manyTeams
    }
}

export default connect(mapStateToProps, {fetchTeams})(Teams)
