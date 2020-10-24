import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from './actions/fetchUsers';


class App extends React.Component {

  
  componentDidMount(){
    this.props.fetchUsers({type: 'FETCH_USERS', payload: {username: 'CaptainJilliams'}})
  }
  

  render(){
    return (
      <div className="App">
        App
      </div>
    );
  }
}

// Our ways of accessing values in our store as props.
/*
const mapStateToProps = (state) => {
  return {
    state
  }
}
*/

export default connect(null, {fetchUsers})(App);
