import React from 'react';
import { connect } from 'react-redux';
import { signUserUp } from '../actions/signupUser'

import '../Signup.css'

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
        this.props.signUserUp(this.state, this.props.history)
    }

    render(){
        return(
            <div className="sign-up-div">
                <h3 className="sign-up-title">Sign Up</h3>
            </div>
        )
    }

}

export default connect(null, {signUserUp})(Signup)