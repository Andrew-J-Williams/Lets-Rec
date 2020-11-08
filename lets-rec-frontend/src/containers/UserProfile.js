import React from 'react';
import { connect } from 'react-redux';

import Profile from '../components/Profile'

import { fetchProfile } from '../actions/fetchProfile'

class UserProfile extends React.Component {

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
        user: state.userReducer.user
    }
}

export default connect(mapStateToProps, {fetchProfile})(UserProfile)