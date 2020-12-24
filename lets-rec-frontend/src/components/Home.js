import React from 'react'

import '../Home.css'

class Home extends React.Component{

render(){
    return(
        <div>
            <div className="home-container">
                <div className="home-text">
                    <h1 className="home-title">Let's Rec!</h1>
                    <h4>A Social Network Connecting Friends, Making New Ones and Playing More Often.</h4>
                </div>
            </div>
        </div>
    )
  }
}
  
export default Home;