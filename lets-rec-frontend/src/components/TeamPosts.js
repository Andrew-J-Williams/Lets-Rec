import React from 'react';
import { connect } from 'react-redux';

import PostCreator from '../components/PostCreator'

import { fetchPosts } from '../actions/fetchPosts'

class TeamPosts extends React.Component{


    componentDidMount(){
        this.props.fetchPosts()
    }

    render(){

        console.log(this.props.posts)
        console.log(this.props.team)

        const postList = this.props.posts
        const teamId = this.props.team.id

        return(
            <div className="team-activity-container">
                <PostCreator/>
                {postList.map(post => {

                    if(post.team_id === teamId){
                        return(
                        <div key={post.id} className="user-post-container">
                                <img src={post.user.picture} className="post-picture" alt="profile-icon"/>
                                <h5 className="post-username">{post.user.username}</h5>
                                <p className="post-content"><b>@{post.team.name.split(" ").join("")}</b> {post.content}</p>
                                <p className="post-time">{post.created_at}</p>
                        </div>
                        )
                    }

                })}
            </div>
        )

    }

}

const mapStateToProps = (state) => {
    return {
        posts: state.userReducer.posts
    }
}

export default connect(mapStateToProps, {fetchPosts})(TeamPosts)