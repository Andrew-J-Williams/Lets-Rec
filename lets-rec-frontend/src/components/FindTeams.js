import React from 'react';

import '../FindTeams.css'

class FindTeams extends React.Component {

    state = {
        location: '',
        sport:''
    }

    handleInputChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    render(){
        const myArray = this.props.teams
        console.log(this.state)
        return(
            <div className="find-teams-container">
                <h2>Find a Team!</h2>
                <label for="locations">Choose a Location: </label>
                <select name="location" id="location-search" onChange={this.handleInputChange}>
                    {myArray.map(team => 
                        <option value={team.location} key={team.id}>{team.location}</option>    
                    )}
                </select>
                <label>Choose a Sport: </label>
                <select name="sport" onChange={this.handleInputChange}>
                {myArray.map(team => 
                        <option value={team.sport} key={team.id}>{team.sport}</option>    
                    )}
                </select>
                <button type="submit">Search</button>
            </div>
        )
    }
}

export default FindTeams

