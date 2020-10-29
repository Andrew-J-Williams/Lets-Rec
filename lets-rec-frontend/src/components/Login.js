import React from 'react';
import { connect } from 'react-redux';
import {logUserIn} from '../actions/loginUser'



class Login extends React.Component {

    state = {
        username: '',
        password: ''
    }

    handleOnChange = (event) => {
        this.setState({
            username: event.target.value,
            password: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()


    }

    render(){

        return(
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <input
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.handleOnChange}
                    ></input>
                    <input
                    placeholder="Password"
                    type="password"
                    value={this.state.password}
                    onChange={this.handleOnChange}
                    ></input>
                    <button
                    type="submit"
                    >Log In</button>
                </form>
            </div>
        )

    }



}

export default Login