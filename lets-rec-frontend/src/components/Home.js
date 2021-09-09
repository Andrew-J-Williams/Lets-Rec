import React from 'react'

import '../css/Home.css'

const Home = (props) => {
    return(
        <div>
            <div className="home-container">
                <div className="home-text">
                    <h1 className="home-title">Let's Rec!</h1>
                    <h3 className="home-sub-title">A Social Network Connecting Friends, Making New Ones and Playing More Often.</h3>
                    <img src="https://i.imgur.com/eux2ezM.png" alt="Logo.png" className="home-logo"/>
                    <br></br>
                    <br></br>
                    <h5 className="home-summ">We are a nationwide community focused on connecting athletes and sports lovers. Join a team, or create your own, and stay up to date with your teammates. Our #1 goal is having fun, so get out there and rec!</h5>
                    <br></br>
                    {
                        props.checkLogIn ? 

                        <div>
                            <a href="profile">
                                <h5 className="home-button">View Profile</h5>
                            </a>
                            <a href="teams">
                                <h5 className="home-button">Find a Team</h5>
                            </a>
                        </div>
                        :
                        <div>
                            <a href="/login">
                                <h5 className="home-button"><b>Log In</b></h5>
                            </a>
                            <a href="signup">
                                <h5 className="home-button"><b>Create Account</b></h5>
                            </a>  
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
  
export default Home;