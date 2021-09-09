import React from 'react';
import { connect } from 'react-redux';

import PostCreator from '../components/PostCreator'
import Post from '../components/Post'

import { deletePost } from '../actions/deletePost'

import '../UserActivity.css'

class TeamPosts extends React.Component{
 
    render(){

        const postList = this.props.teamPosts
        const teamId = this.props.team.id
        const teamInfo = this.props.team

        return(
            <div className="team-posts-container">    
                <div id="team-activity-container" className="team-activity-container">
                    {postList.map(post => {

                        if(post.team_id === teamId){
                            return(
                                <Post key={post.id} currentPost={post} deletePost={this.props.deletePost}/>
                            )
                        }
                        return true
                    })}
                </div>
                <h4 className="post-title">Team Activity</h4>
                <PostCreator currentTeam={teamInfo}/>
            </div>
        )

    }

}

export default connect(null, {deletePost})(TeamPosts)
