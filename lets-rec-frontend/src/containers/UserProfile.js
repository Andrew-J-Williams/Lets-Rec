import React from 'react';
import { connect } from 'react-redux';

import Profile from '../components/Profile'
import UserActivity from '../components/UserActivity'

import { fetchPosts } from '../actions/fetchPosts'

class UserProfile extends React.Component {

    componentDidMount(){
        this.props.fetchPosts()
    }

    render(){
        return (
            <div>
                <UserActivity activity={this.props.posts}/>
                <Profile/>
            </div>   
        )
    }
}

const mapStateToProps = (state) => {
    
    return {
        posts: state.userReducer.posts.sort((a, b) => b.id - a.id)
    }
}

export default connect(mapStateToProps, {fetchPosts})(UserProfile)