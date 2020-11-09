import React from 'react';
import { connect } from 'react-redux';

import Profile from '../components/Profile'
import UserActivity from '../components/UserActivity'

import { fetchUserPosts } from '../actions/fetchUserPosts'

class UserProfile extends React.Component {

    componentDidMount(){
        this.props.fetchUserPosts()
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
        posts: state.userReducer.posts
    }
}

export default connect(mapStateToProps, {fetchUserPosts})(UserProfile)