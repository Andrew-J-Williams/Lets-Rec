import React from 'react';
import { connect } from 'react-redux';

import { createTeam } from '../actions/createTeam'
import { createUserTeams } from '../actions/createTeam'

import '../TeamCreator.css'

class TeamCreator extends React.Component {

    state = {
        name: '',
        sport: '',
        location: '',
        venue: '',
        timeslot: '',
        status: 'open',
        members: 1,
        users:[]
    }


    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(event.target.value)
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        const currentUserId = parseInt(localStorage.currentUser, 10)
        const newTeamId = this.props.teams[this.props.teams.length-1].id+1

        this.props.createTeam(this.state)
        this.props.createUserTeams(currentUserId, newTeamId)
        window.location.reload()
    }

    render(){
        console.log(parseInt(localStorage.currentUser, 10))
        return(
            <div className="team-creator-container">
                <h1>CREATE A TEAM!</h1>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Team Name: </label>
                    <input
                    name="name"
                    value={this.state.name}
                    onChange={this.handleOnChange}
                    ></input>
                    <br></br>
                    <label>Sport: </label>
                    <input
                    name="sport"
                    value={this.state.sport}
                    onChange={this.handleOnChange}
                    ></input>
                    <br></br>
                    <label>Location: </label>
                    <input
                    name="location"
                    value={this.state.location}
                    onChange={this.handleOnChange}
                    ></input>
                    <br></br>
                    <label>Venue: </label>
                    <input
                    name="venue"
                    value={this.state.venue}
                    onChange={this.handleOnChange}
                    ></input>
                    <br></br>
                    <label>Timeslot: </label>
                    <input
                    name="timeslot" 
                    value={this.state.timeslot}
                    onChange={this.handleOnChange}
                    ></input>
                    <br></br>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }


}

export default connect(null, {createTeam, createUserTeams})(TeamCreator)