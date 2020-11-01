import React from 'react';

import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'
import NavBar from './components/NavBar'
import Users from './containers/Users'
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

export default App;
