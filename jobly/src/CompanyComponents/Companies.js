import React, {Component} from 'react';
import JoblyApi from '../JoblyApi';
import CompanyCard from './CompanyCard';
import uuid from 'uuid/v4';
import Search from '../Search.js';

import { withRouter } from "react-router";

class Companies extends Component{
  // <NavLink to='/logout'>Log out</NavLink>

  constructor(props) {
    super(props);
    this.state = {
      companies: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentWillMount() {
    const companies = await JoblyApi.getCompanies();
    const comps = companies.map(c=> ({...c, key: uuid()}));
    this.setState({ companies: comps });
  }

  /** displays the companies matching the search term */
  async handleSubmit(search) {
    let res = await JoblyApi.search('companies',search);
    this.setState({companies: res})
  }

  render(){
    const { companies } = this.state;
    // each company is { handle, name, description, logo_url }
    return (
      <div className="mx-auto">
        <h1> Companies </h1>
        <Search handleSubmit={this.handleSubmit}/>
        { companies.map(c => <CompanyCard 
                                handleSubmit={this.handleSubmit} 
                                {...c}
                                {...this.props} />) }
      </div>
    )
  }
}

export default withRouter(Companies);
