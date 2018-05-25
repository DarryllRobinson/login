import React, { Component } from 'react';
import logo from './logo - faded.png';
import './Home.css';

class Home extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
        {
          isAuthenticated() && (
              <h4>
                Welcome to the Flying Crow Media CMS
              </h4>
            )
        }
        {
          !isAuthenticated() && (
            <div className="loggedOut">
            <img src={ logo } alt="fcm logo" />
              <h5>
                Please{' '}
                <a
                  style={{ cursor: 'pointer' }}
                  onClick={this.login.bind(this)}
                >
                  sign in
                </a>
                {' '}to start your session.
              </h5>
              </div>
            )
        }
      </div>
    );
  }
}

export default Home;
