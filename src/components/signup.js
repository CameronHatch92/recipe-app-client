import React, { Component } from 'react';
import {loadAuthToken} from '../local-storage';
import { Redirect, Link } from 'react-router-dom';

class SignUp extends Component {
  render() {
    let token = loadAuthToken();
    if(token){
      return <Redirect to='/dashboard' />
    }
    return (
      <div>
        <h1>Sign Up</h1>
        <form>
          <label htmlFor="email">Email</label>
          <input type='text' id='email'></input>
          <label htmlFor="password">Password</label>
          <input type='text' id='password'></input>
          <button type='submit'>Sign Up</button>
        </form>
        <div>Already have an account? <Link className='link' to='/'>Log in now!</Link></div>
      </div>
    );
  }
}

export default SignUp;