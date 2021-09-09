import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import loginReducer from './reducers/loginReducer'
import postReducer from './reducers/postReducer'
import membersReducer from './reducers/membersReducer'
import signupReducer from './reducers/signupReducer'
import userReducer from './reducers/userReducer'
import userTeamsReducer from './reducers/userTeamsReducer'
import teamsReducer from './reducers/teamsReducer'

import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let reducer = combineReducers({
  loginReducer,
  postReducer,
  membersReducer,
  signupReducer,
  userReducer,
  userTeamsReducer,
  teamsReducer
})

let store = createStore(reducer,composeEnhancers(applyMiddleware(thunk)))

// store is where we store our data globally.
// reducers tell us what we want to do with our store based on certain actions. 
// They receive action objects and decide what we want to update about our current store, and the reducer will return a new version.

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
