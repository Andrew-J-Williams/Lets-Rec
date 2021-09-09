import React from 'react';
import { connect } from 'react-redux';

import { createPost } from '../actions/createPost'

import '../PostCreator.css'

class PostCreator extends React.Component{


    state = {
        content: '',
        user_id: 0,
        team_id: 0
    }

    handleOnChange = (event) => {
        this.setState({
            content: event.target.value,
            user_id: parseInt(localStorage.currentUser, 10),
            team_id: this.props.currentTeam.id
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()

        this.props.createPost(this.state)
        console.log(this.state)
    }

    render(){
        console.log("@"+this.props.currentTeam.name.split(" ").join(""))
        console.log(this.props.currentTeam.id)
        console.log(parseInt(localStorage.currentUser, 10))

        console.log(this.state.user_id)
        console.log(this.state.team_id)

        return(
            <div className="post-creator-div">
                <form className="post-form" onSubmit={this.handleOnSubmit}>
                    <img src={localStorage.pic} className="user-post-img" alt="user-pic"/>
                    <input
                    name = "content"
                    className="post-input"
                    value={this.state.content}
                    onChange={this.handleOnChange}
                    ></input>
                    <button
                    type="submit"
                    className="post-button"
                    >Post</button>
                </form>
            </div>
        )
    }

}

export default connect(null, {createPost})(PostCreator)