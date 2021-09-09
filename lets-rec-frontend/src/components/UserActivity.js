import React from 'react';
import { connect } from 'react-redux';

import Post from '../components/Post'

import '../UserActivity.css'

import { deletePost } from '../actions/deletePost'

class UserActivity extends React.Component {

    render(){

        const userPosts = this.props.activity.filter(post => post.user_id === parseInt(localStorage.currentUser, 10))

        return(
            <div className="activity-container" id="activity-container">
                <h4 className="activity-title">My Posts</h4>
                {userPosts.map(post =>
                    <Post key={post.id} currentPost={post} deletePost={this.props.deletePost}/>
                )}
            </div>
        )
    }


}

export default connect(null, {deletePost})(UserActivity)