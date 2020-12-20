import React from 'react';
import { connect } from 'react-redux';

import { fetchUser } from '../actions/fetchUser'

class Teammate extends React.Component {

    componentDidMount(){
        const id = this.props.match.params.id
        this.props.fetchUser(id)
    }

    render(){
        return(
            <div>
                <h2>TEAMMATE INFO GOES HERE</h2>
            </div>
        )
    }


}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user
    }
}

export default connect(mapStateToProps, {fetchUser})(Teammate)