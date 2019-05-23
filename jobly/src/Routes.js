import React, { Component } from 'react';
import {Route, BrowserRouter, Switch, Redirect} from 'react-router-dom'

import Navbar from './NavBarComponents/Navbar';
import Companies from './CompanyComponents/Companies';
import Company from './CompanyComponents/Company';
import Jobs from './JobComponents/Jobs';
import Home from './Home';
import Profile from './NavBarComponents/Profile';
import Login from './NavBarComponents/Login';

export default class Routes extends Component {
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
    })
  }

  login(token, username) {
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
    this.setState({isLoggedIn: true});
  }

  logout() {
    localStorage.removeItem('token');
    this.setState({isLoggedIn: false});
  }
 
  render() {
    const { isLoggedIn } = this.state;

    return (
      <BrowserRouter>
        <Navbar isLoggedIn={isLoggedIn} logout={this.logout} />
        <Switch>
          <Route 
            exact path='/login' 
            render={rtProps => <Login isLoggedIn={isLoggedIn} login={this.login} {...rtProps} />} />
          <Route exact path='/companies' render={rtProps => <Companies {...rtProps} />} />
          <Route path='/company/:handle' render={rtProps => <Company {...rtProps} />} />
          <Route exact path='/jobs' render={rtProps => <Jobs {...rtProps} />} />
          <Route exact path='/profile' render={rtProps => <Profile {...rtProps} />} />
          <Route exact path='/' render={rtProps => <Home {...rtProps} />} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    )
  }
}
