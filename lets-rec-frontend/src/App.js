import React from 'react';

import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'
import Posts from './containers/Posts'
import Signup from './components/Signup'
import UserProfile from './containers/UserProfile'
import Teams from './containers/Teams'
import Teammate from './components/Teammate'
import TeamPage from './containers/TeamPage'

import './App.css'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

class App extends React.Component {

  render(){

    let loggedIn = parseInt(localStorage.currentUser, 10) && localStorage.username && localStorage.email && localStorage.teams && localStorage.pic    
    
    return (
      <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/" render={() => <Posts checkLogIn={loggedIn}/>}/>
          <Route exact path="/home" render={() => <Home checkLogIn={loggedIn}/>}/>
          <Route path="/login" render={() => <Login checkLogIn={loggedIn}/>}/>
          <Route path="/signup" render={() => <Signup checkLogIn={loggedIn}/>}/>
          <Route path="/profile" render={() => <UserProfile checkLogIn={loggedIn}/>}/>
          <Route exact path="/teams" render={() => <Teams checkLogIn={loggedIn}/>}/>
          <Route exact path="/teams/:id" component={TeamPage}/>
          <Route exaxt path="/users/:id" component={Teammate}/>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
