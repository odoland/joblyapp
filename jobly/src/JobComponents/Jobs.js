import React, { Component } from 'react';
import uuid from 'uuid/v4';
import JoblyApi from '../JoblyApi.js';
import JobCard from './JobCard.js';
import Search from '../Search';
import { withRouter } from "react-router";


class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [] // id, title, company-handle, salary, equity, state,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleApplication = this.handleApplication.bind(this);
  }

  async componentWillMount() {
    const username = localStorage.getItem('username');
    
    // This will grab all the jobs available as well as the users
    const promises = [JoblyApi.getJobs(), JoblyApi.getUser(username)];

    let [jobs, user] = await Promise.all(promises);
    const appliedJobIds = new Set(user.jobs.map(j => j.id));
    
    jobs = jobs.map(job => {
      return appliedJobIds.has(job.id) ? 
        {...job, key: uuid(), applied: true} : 
        {...job, key: uuid(), applied: false} 
    });
      
    this.setState({ jobs });
  }

  async handleApplication(jobid) {
    const username = localStorage.getItem('username');
    await JoblyApi.applyToJob(jobid, username, 'applied');

    let updatedJobs = this.state.jobs.map(j => {
      if (j.id === +jobid) {
        j.applied = true;
      }
      return j
    });

    this.setState({
      jobs: updatedJobs
    });

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
        { jobs.map(c => <JobCard handleApplication={this.handleApplication} {...c} />) }
        </div>
    )
  }
}

export default withRouter(Jobs);
