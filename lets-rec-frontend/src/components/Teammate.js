import React from 'react';
import { connect } from 'react-redux';

import TeammatePosts from '../components/TeammatePosts'

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
        
        return(
            <div classname="member-container">
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
                <TeammatePosts member={memberInfo}/>
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