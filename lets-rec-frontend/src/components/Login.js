import React from 'react';
//import { connect } from 'react-redux';



class Login extends React.Component {

    render(){

        return(
            <div>
                <form>
                    <input
                    placeholder="Username"
                    ></input>
                    <input
                    placeholder="Password"
                    type="password"
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