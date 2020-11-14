import React from 'react';

import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'
import NavBar from './components/NavBar'
import Posts from './containers/Posts'
import UserProfile from './containers/UserProfile'
import Teams from './containers/Teams'

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
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Posts}/>
          <Route path="/login" component={Login}/>
          <Route path="/profile" component={UserProfile}/>
          <Route path="/teams" component={Teams}/>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
