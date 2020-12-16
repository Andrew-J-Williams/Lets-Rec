import React from 'react';

import "../ActivityFeed.css"

class ActivityFeed extends React.Component{

    activities = {
        posts: this.props.updates.filter(post => this.props.teams.includes(post.team_id))
    }

    render(){

        console.log(this.activities.posts)

        return(
            <div className="activity-div">
            <h1 className="feed-title">Activity Feed</h1>
            <div className="updates-container">
                {this.activities.posts.map(post => 
                    <div key={post.id} className="activity-post-container">
                        <img src={post.user.picture} className="post-picture" alt="profile-icon"/>
                        <h5 className="post-username">{post.user.username}</h5>
                        <p className="post-content"><b>@{post.team.name.split(" ").join("")}</b> {post.content}</p>
                        <p className="post-time">{post.created_at}</p>
                    </div>
                )}
            </div>
            </div>
        )
    }


}

export default ActivityFeed