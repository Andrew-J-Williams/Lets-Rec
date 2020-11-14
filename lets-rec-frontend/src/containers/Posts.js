import React from 'react';
import { connect } from 'react-redux';

import Home from '../components/Home'
import ActivityFeed from '../components/ActivityFeed'


class Posts extends React.Component{


    render(){

        let loggedIn = parseInt(localStorage.currentUser, 10) && localStorage.username && localStorage.email && localStorage.teams && localStorage.pic

        if (loggedIn){
            return (
                <div>
                    <ActivityFeed/>
                </div>          
            )
        } else {
            return (
                <div>
                    <Home/>
                </div>
            )
        }
    }

}

export default Posts