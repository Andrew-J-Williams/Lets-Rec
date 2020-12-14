import React from 'react';
import { connect } from 'react-redux';
import { createUserTeams } from '../actions/createTeam'
import { addTeamtoUser } from '../actions/fetchTeam'

import '../FindTeams.css'

class FindTeams extends React.Component {

    state = {
        location: '',
        sport:''
    }

    handleInputChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
        document.getElementById("search-results").hidden = true
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const resultsContainer = document.getElementById("search-results")
        resultsContainer.hidden = false
    }

    handleClick = (event) => {
        event.preventDefault()

        const userId = parseInt(localStorage.currentUser, 10)
        const teamId = parseInt(event.target.id, 10)

        console.log(`User ID: ${userId}, Team ID: ${teamId}`)
        this.props.addTeamtoUser(teamId)
        this.props.createUserTeams(userId, teamId)
    }


    render(){
        const myArray = this.props.teams
        console.log(this.state)
        let searchTeams = ''
        let resultsDiv = document.getElementById("search-results")

        if (this.state.location === "All Locations" && this.state.sport === "All Sports"){
            searchTeams = myArray
            console.log(searchTeams.length)
        } else if (this.state.location === "All Locations") {
            searchTeams = myArray.filter(team => team.sport.toLowerCase().includes(this.state.sport.toLowerCase()))
            console.log(searchTeams.length)
        } else if (this.state.sport === "All Sports") {
            searchTeams = myArray.filter(team => team.location.toLowerCase().includes(this.state.location.toLowerCase()))
            console.log(searchTeams.length)
        } else {
            searchTeams = myArray.filter(team => team.location.toLowerCase().includes(this.state.location.toLowerCase()) && team.sport.toLowerCase().includes(this.state.sport.toLowerCase()))
            console.log(searchTeams.length)
        }

    

        return(
            <div className="find-teams-container">
                <h2 className="find-a-team">Find a Team!</h2>
                <form className="search-form" onSubmit={this.handleSubmit}>
                    <label for="locations">Choose a Location: </label>
                    <select name="location" id="location-search" value={this.state.location} onChange={this.handleInputChange}>
                        <option>All Locations</option>
                        {myArray.map(team => 
                            <option value={team.location} key={team.id}>{team.location}</option>    
                        )}
                    </select>
                    <label>Choose a Sport: </label>
                    <select name="sport" value={this.state.sport} onChange={this.handleInputChange}>
                        <option>All Sports</option>
                        {myArray.map(team => 
                            <option value={team.sport} key={team.id}>{team.sport}</option>    
                        )}
                    </select>
                    <button type="submit">Search</button>
                </form>
                <div className="search-results" id="search-results">
                    {searchTeams.map(team => {
                        console.log(team.users)
                        console.log(searchTeams)
                        let currentId = parseInt(localStorage.currentUser, 10)
                        let teamUsers = team.users
                        let checkUsers = teamUsers.filter(user => user.id === currentId)

                        if(team.members < 20 && checkUsers.length === 0){
                            return(
                                <div key={team.id} className="team-result" id="team-result">
                                    <h2>{team.name}</h2>
                                    <h5>{team.venue} • {team.timeslot}</h5>
                                    <h5>{team.sport} League • {team.members} members</h5>
                                    <button id={team.id} className="button-result" onClick={this.handleClick}>Join Team</button>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        )
    }
}

export default connect(null, {createUserTeams, addTeamtoUser})(FindTeams)

