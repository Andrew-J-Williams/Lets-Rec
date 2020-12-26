import React from 'react';
import { connect } from 'react-redux';

import ActivityFeed from '../components/ActivityFeed'

import { fetchAllPosts } from '../actions/fetchAllPosts'


class Posts extends React.Component{

    componentDidMount(){
        this.props.fetchAllPosts()
    }

    render(){
        if (this.props.checkLogIn){
            const userTeams = JSON.parse(localStorage.getItem('teams'))
            const teamIds = userTeams.map(team => team.id)
            
            return (
                <div>
                    <ActivityFeed updates={this.props.activities} teams={teamIds}/>
                </div>
            )
        } else {
            window.location.replace('http://localhost:3001/home')
        }
    }

}

const mapStateToProps = (state) => {
    return {
        activities: state.postReducer.posts
    }
}

export default connect(mapStateToProps, {fetchAllPosts})(Posts)