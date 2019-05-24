import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'

import Navbar from '../NavBarComponents/Navbar';
import Companies from '../CompanyComponents/Companies';
import Company from '../CompanyComponents/Company';
import Jobs from '../JobComponents/Jobs';
import Home from '../Home';
import Profile from '../NavBarComponents/Profile';
import Login from '../NavBarComponents/Login';

import PrivateRoute from './PrivateRoute';
import UserContext from './UserContext';
import './Routes.css';

export default class Routes extends Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentWillMount() {
    this.setState({
      isLoggedIn: localStorage.getItem('token') ? true : false
    });
  }

  login(token, username) {

    // Set local storage 
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);

    this.setState({ isLoggedIn: true });
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.setState({ isLoggedIn: false });
  }

  render() {
    const { isLoggedIn } = this.state;

    return (
      <BrowserRouter>
        <UserContext.Provider value={{ username: localStorage.getItem('username') }}>
          <Navbar isLoggedIn={isLoggedIn} logout={this.logout} />
          <main>
            <Switch>
              <Route
                exact path='/login'
                render={() => <Login isLoggedIn={isLoggedIn} login={this.login} />} />
              <Route exact path='/' render={() => <Home />} />

              <PrivateRoute exact path='/companies' render={() => <Companies />} />
              <PrivateRoute path='/company/:handle' render={() => <Company />} />
              <PrivateRoute exact path='/jobs' render={() => <Jobs />} />
              <PrivateRoute exact path='/profile' render={() => <Profile />} />

              <Redirect to="/" />
            </Switch>
          </main>
        </UserContext.Provider>
      </BrowserRouter >
    )
  }
}

