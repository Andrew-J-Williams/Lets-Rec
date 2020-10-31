import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from './actions/fetchUsers';
import { fetchTeams } from './actions/fetchTeams';

import Home from './components/Home'
import Login from './components/Login'
import NavBar from './components/NavBar'
import Users from './containers/Users'
import Teams from './containers/Teams'


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
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/users" component={Users}/>
          <Route path="/teams" component={Teams}/>
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

export default connect(null, {fetchUsers, fetchTeams})(App);
