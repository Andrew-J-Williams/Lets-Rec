import React from 'react';
import { connect } from 'react-redux';

import { createPost } from '../actions/createPost'

import '../PostCreator.css'

class PostCreator extends React.Component{


    state = {
        content: '',
        user_id: parseInt(localStorage.currentUser, 10),
        team_id: this.props.currentTeam.id
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(event.target.value)
    }

    handleOnSubmit = (event) => {
        event.preventDefault()

        this.props.createPost(this.state)
    }

    render(){
        console.log("@"+this.props.currentTeam.name.split(" ").join(""))
        console.log(this.props.currentTeam.id)
        console.log(parseInt(localStorage.currentUser, 10))

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