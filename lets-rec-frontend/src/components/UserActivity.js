import React from 'react';

import '../UserActivity.css'

class UserActivity extends React.Component {

    clickLink(){
        const profileIcon = document.getElementById("profile-icon")
        profileIcon.click()
    }

    render(){
        return(
            <div onLoad={this.clickLink} className="activity-container" id="activity-container">
                <h3 className="my-activity-feed">My Posts</h3>
                {this.props.activity.map(post =>
                    <div key={post.id} className="user-post-container">
                        <img src={post.user.picture} className="post-picture" alt="profile-icon"/>
                        <h5 className="post-username">{post.user.username}</h5>
                        <p className="post-content"><b>@{post.team.name.split(" ").join("")}</b> {post.content}</p>
                        <p className="post-time">{post.created_at}</p>
                    </div>
                )}
            </div>
        )
    }


}

export default UserActivity