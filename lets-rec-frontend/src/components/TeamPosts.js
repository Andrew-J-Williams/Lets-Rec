import React from 'react';
import { connect } from 'react-redux';

import PostCreator from '../components/PostCreator'

import { fetchPosts } from '../actions/fetchPosts'
import { deletePost } from '../actions/deletePost'

import '../UserActivity.css'

class TeamPosts extends React.Component{


    componentDidMount(){
        this.props.fetchPosts()
    }
 
    render(){

        console.log(this.props.posts)
        console.log(this.props.team)

        const postList = this.props.posts
        const teamId = this.props.team.id
        const teamInfo = this.props.team

        return(
            <div>
                <PostCreator currentTeam={teamInfo}/>
                <div id="team-activity-container" className="team-activity-container">
                    {postList.map(post => {

                    if(post.team_id === teamId){
                        return(
                        <div key={post.id} className="user-post-container">
                                <img src={post.user.picture} className="post-picture" alt="profile-icon"/>
                                <h5 className="post-username">{post.user.username}</h5>
                                <p className="post-content"><b>@{post.team.name.split(" ").join("")}</b> {post.content}</p>
                                <p className="post-time">{post.created_at}</p>
                                <img src="https://i.imgur.com/dbzNiXR.png" className="delete-icon" alt="delete-icon" onClick={() => deletePost(post.id)}/>
                        </div>
                        )
                    }

                })}
                </div>
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