import React from 'react';
import { connect } from 'react-redux';

import Home from '../components/Home'
import ActivityFeed from '../components/ActivityFeed'

import { fetchPosts } from '../actions/fetchPosts'


class Posts extends React.Component{

    componentDidMount(){
        this.props.fetchPosts()
    }

    render(){

        let loggedIn = parseInt(localStorage.currentUser, 10) && localStorage.username && localStorage.email && localStorage.teams && localStorage.pic

        if (loggedIn){
            return (
                <div>
                    <ActivityFeed updates={this.props.posts}/>
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
        posts: state.userReducer.posts
    }
}

export default connect(mapStateToProps, {fetchPosts})(Posts)