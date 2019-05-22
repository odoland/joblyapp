import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import JoblyApi from './JoblyApi';

export default class Companies extends Component{
  // <NavLink to='/logout'>Log out</NavLink>

  constructor(props) {
    super(props);
    this.state = {
      companies: []
    }
  }

  async componentWillMount() {
    const companies = await JoblyApi.getCompanies();
    this.setState({ companies });
  }

  render(){
    const { companies } = this.state;
    
    return (
      <div>
        <p> List of companies: </p>
        { companies.map(c => <li> {c} </li>) }
        </div>
    )
  }
}