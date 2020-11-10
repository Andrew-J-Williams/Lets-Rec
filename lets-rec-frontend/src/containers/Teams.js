import React from 'react';
import { connect } from 'react-redux';

import Teamslist from '../components/Teamslist'
import TeamsProfile from '../containers/TeamsProfile'

import { fetchTeams } from '../actions/fetchTeams'

class Teams extends React.Component {

    componentDidMount(){
        this.props.fetchTeams()
    }

    render(){

        return (
            <div>
                <h1>Teams Directory</h1>
                <TeamsProfile teams={this.props.teams}/>
                <Teamslist teams={this.props.teams}/>
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