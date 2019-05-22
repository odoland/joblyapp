import React, {Component} from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom'
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
            <Route exact to='/companies' render={rtProps => <Companies {...rtProps} />} />
            <Route exact to='/company/:company'render={rtProps => <Company {...rtProps} />}/>
            <Route exact to='/jobs' render={rtProps => <Jobs {...rtProps} />}/>
            <Route exact to='/login' render={rtProps => <Login {...rtProps} />}/>
            <Route exact to='/profile' render={rtProps => <Profile {...rtProps} />}/>
            <Route exact to='/' render={rtProps => <Home {...rtProps} />} />
          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
