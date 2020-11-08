import React from 'react';

class UserActivity extends React.Component {


    render(){
        return(
            <div classname="activity-contaier">
                {this.props.activity.map(post =>
                    <h1>{post.content}</h1>
                )}
            </div>
        )
    }


}

export default UserActivity