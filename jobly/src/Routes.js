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
  
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/companies' render={rtProps => <Companies {...rtProps} />} />
          <Route path='/company/:handle' render={rtProps => <Company {...rtProps} />} />
          <Route exact path='/jobs' render={rtProps => <Jobs {...rtProps} />} />
          <Route exact path='/login' render={rtProps => <Login {...rtProps} />} />
          <Route exact path='/profile' render={rtProps => <Profile {...rtProps} />} />
          <Route exact path='/' render={rtProps => <Home {...rtProps} />} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>

    )
  }
}
