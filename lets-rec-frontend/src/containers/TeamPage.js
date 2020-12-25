import React from 'react';
import { connect } from 'react-redux';

import TeamPosts from '../components/TeamPosts'
import LeaveTeam from '../components/LeaveTeam'

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
        } else if (location === "Phoenix") {
            infoDivPic.style.backgroundImage = "url('https://res.cloudinary.com/simpleview/image/upload/v1597873841/clients/phoenix/Downtown_Phoenix_Skyline_with_Full_Moon_Header_6941527a-4ae5-48d9-8df2-1e3810a31704.jpg')"
        } else if (location === "Philadelphia"){
            infoDivPic.style.backgroundImage = "url('https://www.inquirer.com/resizer/rfuxgNvpeL_Gkla7Y_U34HPr1RE=/1400x0/center/middle/arc-anglerfish-arc2-prod-pmn.s3.amazonaws.com/public/OTFZZLRAYVEMPMXX4VFYWY553E.jpg')"
        } else if (location === "San Antonio"){
            infoDivPic.style.backgroundImage = "url('https://www.intownsuites.com/wp-content/uploads/2014/08/A-Warm-Day-and-Cool-Night-in-San-Antonio.jpg')"
        } else if (location === "San Francisco"){
            infoDivPic.style.backgroundImage = "url('https://wallpaperaccess.com/full/2807845.jpg')"
        } else if (location === "Denver"){
            infoDivPic.style.backgroundImage = "url('https://difcdn.denverinfill.com/wp-content/uploads/2013/11/19055626/2013-11-28_DUSCanopy-01.jpg')"
        } else if (location === "Seattle"){
            infoDivPic.style.backgroundImage = "url('https://images.hdqwalls.com/download/seattle-skyline-at-night-view-4k-se-2560x1440.jpg')"
        } else if (location === "Washington D.C."){
            infoDivPic.style.backgroundImage = "url('https://www.travelguideline.net/wp-content/uploads/2020/02/washington-dc-night.jpg')"
        } else if (location === "Austin") {
            infoDivPic.style.backgroundImage = "url('https://www.usnews.com/dims4/USNEWS/16bea9d/2147483647/resize/1200x%3E/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2Fe5%2Fc8%2F5ab5bea24c0598d1de5de90b9353%2Fjohn-coletti-austin-sixth-street-gettyimages-670909690.jpg')"
        }
    }

    render(){
        this.onLoad()
        const teamObject = this.props.team

        this.changePic(teamObject.location)
        console.log(this.props.userTeams)
        console.log("look above")

        return(
            <div>
                <div className="team-info-container">
                    <div className="info-div" id="info-div">
                        <h1 className="info-name" id="team-page-name">{teamObject.name}</h1>
                        <h2 className="info-location">{teamObject.location} • {teamObject.sport} League</h2>
                        <h3>{teamObject.venue}</h3>
                        <h3>{teamObject.timeslot}</h3>
                        <button className="team-leave-button">Leave Team</button>
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
