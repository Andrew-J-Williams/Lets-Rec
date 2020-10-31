import React from 'react';
import { connect } from 'react-redux';

import Userlist from '../components/Userlist'

import { fetchUsers } from '../actions/fetchUsers'

class Users extends React.Component {

    componentDidMount(){
        this.props.fetchUsers()
    }

    render(){

        return (
            <div>
                <h1>Find a Friend!</h1>
                <Userlist users={this.props.users}/>
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