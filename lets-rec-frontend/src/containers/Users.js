import React from 'react';
import { connect } from 'react-redux';

import Userlist from '../components/Userlist'

import { fetchUsers } from '../actions/fetchUsers'

class Users extends React.Component {

    componentDidMount(){
        fetchUsers()
    }

    render(){

        return (
            <div>
                <h1>TESTING</h1>
                <Userlist/>
            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(Users)