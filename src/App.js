import React, { Component } from 'react';
import Dashboard from './components/dashboard';
import LogIn from './components/login';
import Signup from './components/signup';
import './App.css';
import {Route, withRouter} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/' component={LogIn} />
        <Route exact path='/signup' component={Signup} />
      </div>
    );
  }
}

export default withRouter(App);
