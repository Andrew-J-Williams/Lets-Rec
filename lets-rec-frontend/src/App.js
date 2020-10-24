import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from './actions/fetchUsers';

import Users from './containers/Users'


class App extends React.Component {

  render(){
    return (
      <div className="App">
        <Users/>
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
