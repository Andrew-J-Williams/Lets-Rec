import React from 'react';

import "../ActivityFeed.css"

class ActivityFeed extends React.Component{


    render(){

        const postsArray = this.props.updates
        const userTeams = JSON.parse(localStorage.getItem('teams'))
        const teamIds = userTeams.map(team => team.id)
        console.log(teamIds.includes(1))

        return(
            <div className="updates-container">
                <h1>Activity Feed</h1>
                {postsArray.map(post => {
                    if (teamIds.includes(post.team_id)){
                        console.log(post.team_id)
                        return(
                            <div key={post.id} className="user-post-container">
                                <img src={post.user.picture} className="post-picture" alt="profile-icon"/>
                                <h5 className="post-username">{post.user.username}</h5>
                                <p className="post-content"><b>@{post.team.name.split(" ").join("")}</b> {post.content}</p>
                                <p className="post-time">{post.created_at}</p>
                            </div>
                        )
                    }
                    }
                )}
            </div>
        )
    }


}

export default ActivityFeed