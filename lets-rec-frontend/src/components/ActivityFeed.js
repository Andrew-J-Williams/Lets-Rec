import React from 'react';

import "../ActivityFeed.css"

class ActivityFeed extends React.Component{

    
    render(){
        const userActivity = this.props.updates.filter(post => this.props.teams.includes(post.team_id))

        return(
            <div className="activity-div">
                <div className="updates-container">
                <h4 className="feed-title">Activity Feed</h4>
                    {userActivity.map(post => {
                        return( 
                        <div key={post.id} className="activity-post-container">
                            <img src={post.user.picture} className="post-picture" alt="profile-icon"/>
                            <h5 className="post-username">{post.user.username}</h5>
                            <p className="post-content"><b>@{post.team.name.split(" ").join("")}</b> {post.content}</p>
                            <p className="post-time">{post.created_at}</p>
                        </div>
                        )
                    }
                )}
                </div>
            </div>
        )
    }


}

export default ActivityFeed