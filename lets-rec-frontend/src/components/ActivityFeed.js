import React from 'react';
import { connect } from 'react-redux';

import Post from '../components/Post'

import { deletePost } from '../actions/deletePost'

import '../ActivityFeed.css'
import '../UserActivity.css'

class ActivityFeed extends React.Component{

    
    render(){
        const userActivity = this.props.updates.filter(post => this.props.teams.includes(post.team_id))

        return(
            <div className="activity-div">
                
                <div className="updates-container">
                
                    {userActivity.map(post => {
                        return( 
                            <Post key={post.id} currentPost={post} deletePost={this.props.deletePost}/>
                        )
                    })}
                    <h4 className="feed-title">Activity Feed</h4>
                </div>
            </div>
        )
    }


}

export default connect(null, {deletePost})(ActivityFeed)