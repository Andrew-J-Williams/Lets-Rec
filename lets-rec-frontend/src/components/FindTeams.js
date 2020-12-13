import React from 'react';

import '../FindTeams.css'

class FindTeams extends React.Component {

    state = {
        location: '',
        sport:''
    }

    handleInputChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const resultsContainer = document.getElementById("search-results")

    }


    render(){
        const myArray = this.props.teams
        console.log(this.state)

        let searchTeams = myArray.filter(team => team.location.toLowerCase().includes(this.state.location.toLowerCase()) && team.sport.toLowerCase().includes(this.state.sport.toLowerCase()))
        console.log(searchTeams)

        return(
            <div className="find-teams-container">
                <h2>Find a Team!</h2>
                <form onSubmit={this.handleSubmit}>
                    <label for="locations">Choose a Location: </label>
                    <select name="location" id="location-search" value={this.state.location} onChange={this.handleInputChange}>
                        {myArray.map(team => 
                            <option value={team.location} key={team.id}>{team.location}</option>    
                        )}
                    </select>
                    <label>Choose a Sport: </label>
                    <select name="sport" value={this.state.sport} onChange={this.handleInputChange}>
                        {myArray.map(team => 
                            <option value={team.sport} key={team.id}>{team.sport}</option>    
                        )}
                    </select>
                    <button type="submit">Search</button>
                </form>
                <div id="search-results">
                    {searchTeams.map(team => {
                        return(
                            <div key={team.id}>
                                <h2>{team.name}</h2>
                                <h5>{team.location}</h5>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default FindTeams

