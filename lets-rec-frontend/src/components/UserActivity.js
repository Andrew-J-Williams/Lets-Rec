import React from 'react';

import '../UserActivity.css'

class UserActivity extends React.Component {


    render(){
        return(
            <div className="activity-container">
                <h3>Activity Feed</h3>
                {this.props.activity.map(post =>
                    <div key={post.id} className="user-post-container">
                        <h5 className="post-username">{post.user.username}</h5>
                        <p className="post-content">{post.content}</p>
                    </div>
                )}
            </div>
        )
    }


}

export default UserActivity