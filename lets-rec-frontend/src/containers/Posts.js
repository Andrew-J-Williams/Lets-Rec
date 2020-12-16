import React from 'react';
import { connect } from 'react-redux';

import Home from '../components/Home'
import ActivityFeed from '../components/ActivityFeed'

import { fetchAllPosts } from '../actions/fetchAllPosts'


class Posts extends React.Component{

    componentDidMount(){
        this.props.fetchAllPosts()
    }

    render(){

        let loggedIn = parseInt(localStorage.currentUser, 10) && localStorage.username && localStorage.email && localStorage.teams && localStorage.pic
        const userTeams = JSON.parse(localStorage.getItem('teams'))
        const teamIds = userTeams.map(team => team.id)
        console.log(this.props.activities)

        if (loggedIn){
            return (
                <div>
                    <ActivityFeed updates={this.props.activities} teams={teamIds}/>
                </div>
            )
        } else {
            return (
                <div>
                    <Home/>
                </div>
            )
        }
    }

}

const mapStateToProps = (state) => {
    return {
        activities: state.postReducer.posts
    }
}

export default connect(mapStateToProps, {fetchAllPosts})(Posts)