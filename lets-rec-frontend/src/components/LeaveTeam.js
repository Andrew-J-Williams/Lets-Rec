import React from 'react';
import { connect } from 'react-redux';

import { getUserTeams } from '../actions/fetchUserTeams'
import { deleteUserTeams } from '../actions/fetchUserTeams'

class LeaveTeam extends React.Component {

    componentDidMount(){
        this.props.getUserTeams()
    }



    render(){
        console.log(this.props.userTeams)

        const userId = parseInt(localStorage.currentUser, 10)
        const findTeam = this.props.userTeams.find(userTeam => userTeam.team_id === this.props.teamId && userTeam.user_id === userId)

        console.log(findTeam)

        return(
            <div>
                <button className="team-leave-button" onClick={() => this.props.deleteUserTeams(findTeam)}>Leave Team</button>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        userTeams: state.userTeamsReducer.userTeams
    }
}

export default connect(mapStateToProps, {getUserTeams, deleteUserTeams})(LeaveTeam)