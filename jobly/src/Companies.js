import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import JoblyApi from './JoblyApi';

class Companies extends Component{
  // <NavLink to='/logout'>Log out</NavLink>

  render(){
    JoblyApi.getCompanies()
    return (
    
    )
  }
}