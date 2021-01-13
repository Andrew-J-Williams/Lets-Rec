import React from 'react';

import '../UserActivity.css'

const Post = (props) => {

        const userId = parseInt(localStorage.currentUser, 10)


        if(props.currentPost.user.id === userId){
        return(
            <div key={props.currentPost.id} className="user-post-container" id={props.currentPost.id}>
                <img src={props.currentPost.user.picture} className="post-picture" alt="profile-icon"></img>
                <h5 className="post-username">{props.currentPost.user.username}</h5>
                <p className="post-content"><b>@{props.currentPost.team.name.split(" ").join("")}</b> {props.currentPost.content}</p>
                <button className="delete-button-post" onClick={() => props.deletePost(props.currentPost.id)}>Delete</button>
            </div>
        )} else {
            return(
                <div key={props.currentPost.id} className="user-post-container" id={props.currentPost.id}>
                    <img src={props.currentPost.user.picture} className="post-picture" alt="profile-icon"></img>
                    <h5 className="post-username">{props.currentPost.user.username}</h5>
                    <p className="post-content"><b>@{props.currentPost.team.name.split(" ").join("")}</b> {props.currentPost.content}</p>
                </div>
            )
        }

}

export default Post