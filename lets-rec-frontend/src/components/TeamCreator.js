import React from 'react';

import '../TeamCreator.css'

class TeamCreator extends React.Component {

    state = {
        name: '',
        sport: '',
        location: '',
        venue: '',
        timeslot: '',
        status: 'open',
        members: 0
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(event.target.value)
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }

    render(){
        return(
            <div className="team-creator-container">
                <h1>CREATE TEAM!</h1>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Team Name: </label>
                    <input
                    name="name"
                    onChange={this.handleOnChange}
                    ></input>
                    <br></br>
                    <label>Sport: </label>
                    <input
                    name="sport"
                    onChange={this.handleOnChange}
                    ></input>
                    <br></br>
                    <label>Location: </label>
                    <input
                    name="location"
                    onChange={this.handleOnChange}
                    ></input>
                    <br></br>
                    <label>Venue: </label>
                    <input
                    name="venue"
                    onChange={this.handleOnChange}
                    ></input>
                    <br></br>
                    <label>Timeslot: </label>
                    <input
                    name="timeslot" 
                    onChange={this.handleOnChange}
                    ></input>
                    <br></br>
                    <button>Submit</button>
                </form>
            </div>
        )
    }


}

export default TeamCreator