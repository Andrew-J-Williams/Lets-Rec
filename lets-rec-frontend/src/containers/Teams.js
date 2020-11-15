import React from 'react';
import { connect } from 'react-redux';

import FindTeams from '../components/FindTeams'
import TeamCreator from '../components/TeamCreator'
import TeamsProfile from '../containers/TeamsProfile'

import { fetchTeams } from '../actions/fetchTeams'

class Teams extends React.Component {

    componentDidMount(){
        this.props.fetchTeams()
    }

    render(){

        return (
            <div>
                <TeamsProfile teams={this.props.teams}/>
                <FindTeams teams={this.props.teams}/>
                <TeamCreator/>
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