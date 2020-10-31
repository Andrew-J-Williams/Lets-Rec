import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from './actions/fetchUsers';

import Users from './containers/Users'
import Login from './components/Login'
import NavBar from './components/NavBar'


import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';


class App extends React.Component {

  render(){
    return (
      <Router>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/users" component={Users}/>
        </Switch>
      </div>
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
