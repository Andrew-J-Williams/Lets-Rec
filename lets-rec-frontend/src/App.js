import React from 'react';

import Header from './components/Header'
import Login from './components/Login'
import Posts from './containers/Posts'
import Signup from './components/Signup'
import UserProfile from './containers/UserProfile'
import Teams from './containers/Teams'
import TeamCreator from './components/TeamCreator'
import TeamPage from './containers/TeamPage'

import './App.css'

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
        <Header/>
        <Switch>
          <Route exact path="/" component={Posts}/>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/profile" component={UserProfile}/>
          <Route path="/team-creator" component={TeamCreator}/>
          <Route exact path="/teams" component={Teams}/>
          <Route exact path="/teams/:id" component={TeamPage}/>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
