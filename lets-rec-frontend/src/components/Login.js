import React from 'react';
import { connect } from 'react-redux';
import { logUserIn } from '../actions/loginUser'

import '../Login.css'

class Login extends React.Component {

    state = {
        username: '',
        password: ''
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(event.target.value)
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
        this.props.logUserIn(this.state)
    }

    render(){

        return(
            <div className="log-in-div">
                <form onSubmit={this.handleOnSubmit} className="log-in-form">
                    <input
                    name="username"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.handleOnChange}
                    className="log-in-username"
                    ></input>
                    <br></br>
                    <input
                    name="password"
                    className="log-in-password"
                    placeholder="Password"
                    type="password"
                    value={this.state.password}
                    onChange={this.handleOnChange}
                    ></input>
                    <br></br>
                    <button
                    type="submit"
                    className="log-in-button"
                    >Log In</button>
                </form>
            </div>
        )

    }



}

export default connect(null, {logUserIn})(Login)