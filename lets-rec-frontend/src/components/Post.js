import React from 'react';

import '../UserActivity.css'

class Post extends React.Component {

    render(){
        const userId = parseInt(localStorage.currentUser, 10)


        if(this.props.currentPost.user.id === userId){
        return(
            <div key={this.props.currentPost.id} className="user-post-container" id={this.props.currentPost.id}>
                <img src={this.props.currentPost.user.picture} className="post-picture" alt="profile-icon"></img>
                <h5 className="post-username">{this.props.currentPost.user.username}</h5>
                <p className="post-content"><b>@{this.props.currentPost.team.name.split(" ").join("")}</b> {this.props.currentPost.content}</p>
                <button className="delete-button-post" onClick={() => this.props.deletePost(this.props.currentPost.id)}>Delete</button>
            </div>
        )} else {
            return(
                <div key={this.props.currentPost.id} className="user-post-container" id={this.props.currentPost.id}>
                    <img src={this.props.currentPost.user.picture} className="post-picture" alt="profile-icon"></img>
                    <h5 className="post-username">{this.props.currentPost.user.username}</h5>
                    <p className="post-content"><b>@{this.props.currentPost.team.name.split(" ").join("")}</b> {this.props.currentPost.content}</p>
                </div>
            )
        }
    }

}

export default Post