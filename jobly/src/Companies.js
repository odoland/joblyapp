import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import JoblyApi from './JoblyApi';

class Companies extends Component{
  // <NavLink to='/logout'>Log out</NavLink>

  render(){
    const companies = await JoblyApi.getCompanies();
    return (
      <div>
        { companies.map(c => <li> {c} </li>) }
        </div>
    )
  }
}