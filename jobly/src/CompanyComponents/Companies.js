import React, {Component} from 'react';
import JoblyApi from '../JoblyApi';
import CompanyCard from './CompanyCard';
import uuid from 'uuid/v4';
import Search from '../Search.js';

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
    const comps = companies.map(c=> ({...c, key: uuid()}));
    this.setState({ companies: comps });
  }

  /** displays the companies matching the search term */
  handleSubmit(search) {
    JoblyApi.searchCompany()
  }

  render(){
    const { companies } = this.state;
    // each company is { handle, name, description, logo_url }
    return (
      <div>
        <Search />

        <p> List of companies: </p>
        { companies.map(c => <CompanyCard 
                                handleSubmit={this.handleSubmit} 
                                {...c}
                                {...this.props} />) }
      </div>
    )
  }
}