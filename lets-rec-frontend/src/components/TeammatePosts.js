import React from 'react';
import { connect } from 'react-redux';

import { fetchAllPosts } from '../actions/fetchAllPosts'

class TeammatePosts extends React.Component {


    componentDidMount(){
       this.props.fetchAllPosts()
    }

    render(){
        let memberId = this.props.member.id
        let memberUsername = this.props.member.username
        let memberPosts = this.props.posts.filter(post => post.user_id === memberId)
        console.log(memberPosts)


        return(
            <div className="activity-container">
                <h3 className="my-activity-feed">{memberUsername}'s Posts</h3>
                {memberPosts.map(post =>
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

const mapStateToProps = (state) => {
    return {
        posts: state.postReducer.posts
    }
}

export default connect(mapStateToProps, {fetchAllPosts})(TeammatePosts)