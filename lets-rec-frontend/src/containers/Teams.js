import React from 'react';
import { connect } from 'react-redux';

import FindTeams from '../components/FindTeams'
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