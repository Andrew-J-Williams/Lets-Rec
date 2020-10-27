import React from 'react';
import { connect } from 'react-redux';

import Userlist from '../components/Userlist'
import Login from '../components/Login'

import { fetchUsers } from '../actions/fetchUsers'

class Users extends React.Component {

    componentDidMount(){
        this.props.fetchUsers()
    }

    render(){

        return (
            <div>
                <h1>TESTING</h1>
                <Userlist users={this.props.users}/>
                <Login/>
            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        users: state.userReducer
    }
}

export default connect(mapStateToProps, {fetchUsers})(Users)