import React from 'react';
import { connect } from 'react-redux';
import { logUserIn } from '../actions/loginUser'



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
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <input
                    name="username"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.handleOnChange}
                    ></input>
                    <input
                    name="password"
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

export default connect(null, {logUserIn})(Login)