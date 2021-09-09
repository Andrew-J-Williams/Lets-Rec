import React from 'react';
import { connect } from 'react-redux';

import { createTeam } from '../actions/createTeam'

import '../TeamCreator.css'

class TeamCreator extends React.Component {

    state = {
        name: '',
        sport: '',
        location: '',
        venue: '',
        timeslot: '',
        status: 'open',
        members: 1
    }


    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(event.target.value)
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
       
        this.props.createTeam(this.state)
        window.location.reload()
    }

    backToFinder(){
        const findTeamsContainer = document.getElementById("find-teams-container")
        const teamCreatorContainer = document.getElementById("team-creator-container")
        const teamButton = document.getElementById("create-team-button")

        findTeamsContainer.hidden = false
        teamCreatorContainer.hidden = true
        teamButton.style.display = "block"
    }

    render(){
        return(
            <div className="team-creator-container" id="team-creator-container" hidden>
                <form className="creator-form" onSubmit={this.handleOnSubmit}>
                    <h1 className="creator-header">Create Your Team!</h1>
                    <label className="creator-label">Team Name </label>
                    <input
                    name="name"
                    className="creator-input-box"
                    value={this.state.name}
                    onChange={this.handleOnChange}
                    ></input>
                    <br></br><br></br>
                    <label className="creator-label">Sport </label>
                    <input
                    name="sport"
                    className="creator-input-box"
                    value={this.state.sport}
                    onChange={this.handleOnChange}
                    ></input>
                    <br></br><br></br>
                    <label className="creator-label">Location </label>
                    <input
                    name="location"
                    className="creator-input-box"
                    value={this.state.location}
                    onChange={this.handleOnChange}
                    ></input>
                    <br></br><br></br>
                    <label className="creator-label">Venue </label>
                    <input
                    name="venue"
                    className="creator-input-box"
                    value={this.state.venue}
                    onChange={this.handleOnChange}
                    ></input>
                    <br></br><br></br>
                    <label className="creator-label">Timeslot </label>
                    <input
                    name="timeslot"
                    className="creator-input-box" 
                    value={this.state.timeslot}
                    onChange={this.handleOnChange}
                    ></input>
                    <br></br><br></br>
                    <button className="creator-button" type="submit">Submit</button>
                </form>
                <button className="creator-button-back" onClick={this.backToFinder}>Back</button>
            </div>
        )
    }


}

export default connect(null, {createTeam})(TeamCreator)