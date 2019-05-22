import React, {Component} from 'react';
import {Route, BrowserRouter, Switch, Redirect} from 'react-router-dom'
import './App.css';
import Navbar from './Navbar';
import Companies from './Companies';
import Company from './Company';
import Jobs from './Jobs';
import Home from './Home';
import Profile from './Profile';
import Login from './Login';

class App extends Component {
  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />

          <Switch>
            <Route exact path='/' render={rtProps => <Home {...rtProps} />} />
            <Route exact path='/companies' render={rtProps => <Companies {...rtProps} />} />
            <Route exact path='/company/:company'render={rtProps => <Company {...rtProps} />}/>
            <Route exact path='/jobs' render={rtProps => <Jobs {...rtProps} />}/>
            <Route exact path='/login' render={rtProps => <Login {...rtProps} />}/>
            <Route exact path='/profile' render={rtProps => <Profile {...rtProps} />}/>
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
