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

    changePic(location){
        const infoDivPic = document.getElementById("info-div")
        if (location === "Houston"){
            infoDivPic.style.backgroundImage = "url('https://i.imgur.com/mlN3HFv.jpg')"
        } else if (location === "Chicago"){
            infoDivPic.style.backgroundImage = "url('https://i.imgur.com/qHY9Nok.jpeg')"
        } else if (location === "Los Angeles"){
            infoDivPic.style.backgroundImage = "url('https://theclimatecenter.org/wp-content/uploads/2020/08/night-lights-in-los-angeles-california-cityscape-scaled.jpg')"
        } else if (location === "New York City"){
            infoDivPic.style.backgroundImage = "url('https://i.ytimg.com/vi/dMgBYqTlnkk/maxresdefault.jpg')"
        }
    }

    render(){
        this.onLoad()
        const teamObject = this.props.team

        this.changePic(teamObject.location)

        return(
            <div>
                <div className="team-info-container">
                    <div className="info-div" id="info-div">
                        <h1 className="info-name" id="team-page-name">{teamObject.name}</h1>
                        <h2 className="info-location">{teamObject.location} • {teamObject.sport} League</h2>
                        <h3>{teamObject.venue}</h3>
                        <h3>{teamObject.timeslot}</h3>
                    </div>
                    <div className="users-div">
                        <h4 className="users-div-header">{teamObject.users.length} Members</h4>
                        {teamObject.users.map(user => {
                            return(
                                <div key={user.id} className="team-user-div">
                                    <img src={user.picture} className="team-user-pic" alt="user-pic"/>
                                    <h5 className="team-user-name">{user.username}</h5>
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
