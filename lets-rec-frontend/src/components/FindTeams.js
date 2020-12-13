import React from 'react';

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


    render(){
        const myArray = this.props.teams
        console.log(this.state)
        let searchTeams = ''
        console.log(searchTeams)

        if (this.state.location === "All Locations" && this.state.sport === "All Sports"){
            searchTeams = myArray
        } else if (this.state.location === "All Locations") {
            searchTeams = myArray.filter(team => team.sport.toLowerCase().includes(this.state.sport.toLowerCase()))
        } else if (this.state.sport === "All Sports") {
            searchTeams = myArray.filter(team => team.location.toLowerCase().includes(this.state.location.toLowerCase()))
        } else {
            searchTeams = myArray.filter(team => team.location.toLowerCase().includes(this.state.location.toLowerCase()) && team.sport.toLowerCase().includes(this.state.sport.toLowerCase()))
        }

        return(
            <div className="find-teams-container">
                <h2>Find a Team!</h2>
                <form onSubmit={this.handleSubmit}>
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
                <div id="search-results" hidden>
                    {searchTeams.map(team => {
                        return(
                            <div key={team.id} className="team-result">
                                <h2>{team.name}</h2>
                                <h5>{team.venue} • {team.timeslot}</h5>
                                <h5>{team.sport} League • {team.members} members</h5>
                                <button className="button-result">Join Team</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default FindTeams

