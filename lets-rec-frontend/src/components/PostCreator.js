import React from 'react';
import { connect } from 'react-redux';

class PostCreator extends React.Component{


    state = {
        content: ''
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(event.target.value)
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <input
                    name = "content"
                    value={this.state.content}
                    onChange={this.handleOnChange}
                    ></input>
                    <button
                    type="submit"
                    >Post</button>
                </form>
            </div>
        )
    }

}

export default PostCreator