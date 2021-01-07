import React from 'react';

import '../UserTeams.css'

class TeamLiker extends React.Component {

    state = {
        isLiked: false
    }

    handleClick = () => {
        this.setState({
            isLiked: !this.state.isLiked
        })
    }

    render(){
        return(
            <div className="like-container">
                <h2 className="like-count">{this.state.isLiked ? 1 : 0}</h2>
                <button onClick={this.handleClick} className="like-button">Like</button>
            </div>
        )
    }

}

export default TeamLiker