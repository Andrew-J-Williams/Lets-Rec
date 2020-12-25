import React from 'react';
import { connect } from 'react-redux';

import { getUserTeams } from '../actions/createTeam'

class LeaveTeam extends React.Component {

    componentDidMount(){
        this.props.getUserTeams()
    }

    render(){
        return(
            <div>
                <button className="team-leave-button">Leave Team</button>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        userTeams: state.teamsReducer.userTeams
    }
}

export default connect(mapStateToProps, {getUserTeams})(LeaveTeam)