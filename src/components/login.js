import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Mutation } from 'react-apollo';

import { loadAuthToken, saveAuthToken } from '../local-storage';
import { LOGIN } from '../Mutations';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loggedIn: loadAuthToken()
    }
  }

  render() {
    if (this.state.loggedIn) {
      return <Redirect to='/dashboard' />
    }
    const { email, password } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <Mutation mutation={LOGIN} variables={{ email, password }} update={(store, { loading, error, data }) => {
          const login = data.login;
          if(login){
            this.setState({loggedIn: login});
          }
          saveAuthToken(login);
        }}>
          {(parsedLink, { data, error, loading }) => {
            let errDiv;
            if (loading) {
              return (
                <div>Loading...</div>
              )
            }
            if (error) {
              errDiv = <div>{error.message}</div>
            }
            return (
              <div>
                {errDiv}
                <form onSubmit={e => {
                  e.preventDefault();
                  parsedLink();
                  this.setState({email: '', password: ''})
                }}>
                  <label htmlFor="email">Email</label>
                  <input type='text' id='email' value={email} onChange={e => this.setState({ email: e.target.value })}></input>
                  <label htmlFor="password">Password</label>
                  <input type='text' id='password' value={password} onChange={e => this.setState({ password: e.target.value })}></input>
                  <button type='submit'>Login</button>
                </form>
              </div>
            );
          }}
        </Mutation>
        <div>Don't have an account? <Link className='link' to='/signup'>Sign up now!</Link></div>
      </div>
    );
  }
}

export default Login;