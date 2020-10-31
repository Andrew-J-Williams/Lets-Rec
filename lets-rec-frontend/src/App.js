import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from './actions/fetchUsers';

import Users from './containers/Users'
import Login from './components/Login'


import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';


class App extends React.Component {

  render(){
    return (
      <Router>
      <div className="App">
        <h3>
          <Link to="/users">Users</Link>
        </h3>
        <h3>
          <Link to="/login">Log In</Link>
        </h3>
      </div>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/users" component={Users}/>
        </Switch>
      </Router>
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
