import React, { Component } from 'react';
import uuid from 'uuid/v4';
import JoblyApi from '../JoblyApi.js';
import JobCard from './JobCard.js';

export default class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [] // id, title, company-handle, salary, equity, state,
    }
  }

  async componentWillMount() {
    const jobs = await JoblyApi.getJobs();
    const jb = jobs.map(j=> ({...j, key: uuid()}));
    this.setState({ jobs: jb });
  }

  render(){
    const { jobs } = this.state;
 
    // each company is { handle, name, description, logo_url }
    return (
      <div>
        <p> List of jobs: </p>
        { jobs.map(c => <JobCard {...c} />) }
        </div>
    )
  }
}
