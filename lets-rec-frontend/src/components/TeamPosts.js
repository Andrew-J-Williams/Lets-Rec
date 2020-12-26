import React from 'react';
import { connect } from 'react-redux';

import PostCreator from '../components/PostCreator'
import Post from '../components/Post'

import { fetchPosts } from '../actions/fetchPosts'
import { deletePost } from '../actions/deletePost'

import '../UserActivity.css'

class TeamPosts extends React.Component{


    componentDidMount(){
        this.props.fetchPosts()
    }
 
    render(){

        const postList = this.props.posts
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

const mapStateToProps = (state) => {
    return {
        posts: state.userReducer.posts
    }
}

export default connect(mapStateToProps, {fetchPosts, deletePost})(TeamPosts)
