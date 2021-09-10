import React from 'react';
import { connect } from 'react-redux';
import { signUserUp } from '../actions/signupUser'

import '../css/Signup.css'

class Signup extends React.Component {

    state = {
        username: '',
        email: '',
        password: '',
        picture: ''
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
        this.props.signUserUp(this.state)
    }

    render(){
        return(
            <div className="sign-up-div">
                <h3 className="sign-up-title">Sign Up</h3>
                <form onSubmit={this.handleOnSubmit} className="sign-up-form">
                <input
                        name="username"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.handleOnChange}
                        className="sign-up-username"
                    ></input>
                    <br></br>
                    <input
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleOnChange}
                        className="sign-up-email"
                    ></input>
                    <br></br>
                    <input
                        name="password"
                        className="sign-up-password"
                        placeholder="Password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleOnChange}
                    ></input>
                    <br></br>
                    <input
                        name="picture"
                        placeholder="Profile Picture URL"
                        value={this.state.picture}
                        onChange={this.handleOnChange}
                        className="sign-up-picture"
                    ></input>
                    <br></br>
                    <button
                        type="submit"
                        className="sign-up-button"
                    >Create Account</button>
                </form>
            </div>
        )
    }

}

export default connect(null, {signUserUp})(Signup)