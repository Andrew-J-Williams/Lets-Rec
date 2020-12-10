import React from 'react';
import { connect } from 'react-redux';

import '../UserActivity.css'

class Post extends React.Component {

    render(){

        return(
            <div key={this.props.currentPost.id} className="user-post-container" id={this.props.currentPost.id}>
                <img src={this.props.currentPost.user.picture} className="post-picture" alt="profile-icon"></img>
                <h5 className="post-username">{this.props.currentPost.user.username}</h5>
                <p className="post-content"><b>@{this.props.currentPost.team.name.split(" ").join("")}</b> {this.props.currentPost.content}</p>
                <img src="https://i.imgur.com/dbzNiXR.png" className="delete-icon" alt="delete-icon"/>
                <button onClick={() => this.props.deletePost(this.props.currentPost.id)}>Delete</button>
            </div>
        )
    }

}

export default Post