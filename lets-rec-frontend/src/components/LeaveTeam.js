import React from 'react';
import { connect } from 'react-redux';

import { getUserTeams } from '../actions/fetchUserTeams'
import { deleteUserTeams } from '../actions/fetchUserTeams'

class LeaveTeam extends React.Component {

    componentDidMount(){
        this.props.getUserTeams()
    }

    deleteConnection = (event) => {
        event.preventDefault()

        let currentTeamId = this.props.userTeams

        let userId = parseInt(localStorage.currentUser, 10)
        const findTeam = currentTeamId.find(userTeam => userTeam.team_id === this.props.teamId && userTeam.user_id === userId)

        const userTeamsArray = JSON.parse(localStorage.getItem('teams'))
        const newTeam = userTeamsArray.filter(team => team.id !== findTeam.team_id)
        console.log(userTeamsArray)
        localStorage.setItem("teams", JSON.stringify(newTeam))

        this.props.deleteUserTeams(findTeam)
        window.location.replace('http://localhost:3001/teams')
    }

    render(){
        console.log(this.props.userTeams)

        let currentTeamId = this.props.userTeams

        const userId = parseInt(localStorage.currentUser, 10)
        const findTeam = currentTeamId.find(userTeam => userTeam.team_id === this.props.teamId && userTeam.user_id === userId)

        console.log(findTeam)

        return(
            <div>
                <button className="team-leave-button" onClick={this.deleteConnection}>Leave Team</button>
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