import React from 'react';
import { connect } from 'react-redux';

import { fetchUserProfile } from '../actions/fetchUserProfile'

import '../Teammate.css'

class Teammate extends React.Component {

    componentDidMount(){
        let id = this.props.match.params.id
        this.props.fetchUserProfile(id) 
    }

    getTeamMembers = (state) => {
        const getMembers = state.map(team => team.members)
        const teammates = (getMembers.reduce(function(a, b){return a + b;}, 0) - state.length)
        return teammates
    }
   
    render(){
        let memberInfo = this.props.member
        console.log(memberInfo)
        
        return(
            <div className="member-profile-container">
                <div className="member-info-box">
                    <h1 className="member-profile-username">{memberInfo.username}</h1>
                    <h4 className="member-profile-teams"><b>{memberInfo.teams.length}</b> teams</h4>
                    <h4 className="member-profile-teammates"><b>{this.getTeamMembers(memberInfo.teams)}</b> teammates</h4>
                    <h4 className="member-profile-email">{memberInfo.email}</h4>
                    <img src="https://www.clipartkey.com/mpngs/m/60-606769_icons-computer-mail-email-address-free-frame-email.png" alt="member-email-icon" className="member-email-icon"/>
                </div>
                <div className="member-profile-pic-container">
                    <img src={memberInfo.picture} className="member-profile-pic" alt="member-pic"/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        member: state.membersReducer.member
    }
}

export default connect(mapStateToProps, {fetchUserProfile})(Teammate)



/*
    const teammateInfo = this.props.location.info
    const teammateTeams = this.props.location.teams

    state = {
        id: this.props.location.info.id,
        username: this.props.location.info.username,
        email: this.props.location.info.email,
        teams: this.props.location.teams,
        picture: this.props.location.info.picture
    }

    getTeams = (state, info) => {
        let membersArray = []
        let userTeams = []

        state.map(team => {
            membersArray.push(team.users)
        })

        console.log(membersArray)

        membersArray.map(member => 
            member.forEach(user => {
                if(user.id === info.id){
                    console.log(user)
                    userTeams.push(user)
                }
            })    
        ) 
        return userTeams.length
    }

   getTeamMembers = (teams, info) => {
        let teamIdArray = []
        let membersSum = []
        let i

        teams.map(team => team.users.map(user => {
            if(user.id === info.id){
                teamIdArray.push(team.id)
            }
        }))
        console.log(teamIdArray)

        for(i=0; i < teams.length; i++){
            if(teamIdArray.includes(teams[i].id)){
                membersSum.push(teams[i].members)
            }
        }

        let sumArray = membersSum.reduce((a, b) => a + b, 0)

        return sumArray - membersSum.length
    } */

    /*
    <div className="info-box">
                    <h1 className="profile-username">{teammateInfo.username}</h1>
                    <h4 className="profile-teams"><b>{this.getTeams(teammateTeams, teammateInfo)}</b> teams</h4>
                    <h4 className="profile-teammates"><b>{this.getTeamMembers(teammateTeams, teammateInfo)}</b> teammates</h4>
                    <h4 className="profile-email">{teammateInfo.email}</h4>
                    <img src="https://www.clipartkey.com/mpngs/m/60-606769_icons-computer-mail-email-address-free-frame-email.png" alt="email-icon" className="email-icon"/>
                </div>
                <div className="profile-pic-container">
                    <img src={teammateInfo.picture} alt="Profile Pic" className="profile-pic"/>
                </div>





*/
