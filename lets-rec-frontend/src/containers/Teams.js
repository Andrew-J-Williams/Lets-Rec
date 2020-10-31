import React from 'react';
import { connect } from 'react-redux';

import Teamslist from '../components/Teamslist'

import { fetchTeams } from '../actions/fetchTeams'

class Teams extends React.Component {

    componentDidMount(){
        this.props.fetchTeams()
    }

    render(){

        return (
            <div>
                <h1>Teams Directory</h1>
                <Teamslist teams={this.props.teams}/>
            </div>
            
        )

    }
}

const mapStateToProps = (state) => {
    return {
        teams: state.teamsReducer
    }
}

export default connect(mapStateToProps, {fetchTeams})(Teams)