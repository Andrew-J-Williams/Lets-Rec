import React from 'react';
import { connect } from 'react-redux';

import Userlist from '../components/Userlist'
import Profile from '../components/Profile'

import { fetchUsers } from '../actions/fetchUsers'
import { fetchProfile } from '../actions/fetchProfile'

class Users extends React.Component {

    componentDidMount(){
        this.props.fetchProfile()
    }

    render(){

        return (
            <div>
                <Profile info={this.props.user}/>
            </div>
            
        )

    }
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer
    }
}

export default connect(mapStateToProps, {fetchProfile})(Users)