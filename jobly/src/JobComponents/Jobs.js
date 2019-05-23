import React, { Component } from 'react';
import uuid from 'uuid/v4';
import JoblyApi from '../JoblyApi.js';
import JobCard from './JobCard.js';
import Search from '../Search';

export default class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [] // id, title, company-handle, salary, equity, state,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentWillMount() {
    const jobs = await JoblyApi.getJobs();
    const jb = jobs.map(j=> ({...j, key: uuid()}));
    this.setState({ jobs: jb });
  }

  async handleSubmit(search) {
    let res = await JoblyApi.search('jobs',search);
    this.setState({jobs: res})
  }

  render(){
    const { jobs } = this.state;
 
    // each company is { handle, name, description, logo_url }
    return (
      <div>
        <h1> Jobs </h1>
        <Search handleSubmit={this.handleSubmit} />
        { jobs.map(c => <JobCard {...c} />) }
        </div>
    )
  }
}
