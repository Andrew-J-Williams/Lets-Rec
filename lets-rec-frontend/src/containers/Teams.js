import React from 'react';
import { connect } from 'react-redux';

import FindTeams from '../components/FindTeams'
import TeamCreator from '../components/TeamCreator'
import UserTeams from '../components/UserTeams'

import { fetchTeams } from '../actions/fetchTeams'

class Teams extends React.Component {

    componentDidMount(){
        this.props.fetchTeams()
    }

    render(){

        return (
            <div>
                <UserTeams teams={this.props.teams}/>
                <FindTeams teams={this.props.teams}/>
                <TeamCreator teams={this.props.teams}/>
            </div>
            
        )

    }
}

const mapStateToProps = (state) => {
    return {
        teams: state.teamsReducer.manyTeams
    }
}

export default connect(mapStateToProps, {fetchTeams})(Teams)