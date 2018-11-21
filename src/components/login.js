import React, { Component } from 'react';
import {loadAuthToken} from '../local-storage';
import { Redirect, Link } from 'react-router-dom';

class Login extends Component {
  render() {
    let token = loadAuthToken();
    if(token){
      return <Redirect to='/dashboard' />
    }

    return (
      <div>
        <h1>Login</h1>
        <form>
          <label htmlFor="email">Email</label>
          <input type='text' id='email'></input>
          <label htmlFor="password">Password</label>
          <input type='text' id='password'></input>
          <button type='submit'>Login</button>
        </form>
        <div>Don't have an account? <Link className='link' to='/signup'>Sign up now!</Link></div>
      </div>
    );
  }
}

export default Login;