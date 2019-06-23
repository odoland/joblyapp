import React, { Component } from 'react';
import JoblyApi from '../JoblyApi';
import JobCard from '../JobComponents/JobCard';
import uuid from 'uuid/v4';

import { withRouter } from "react-router";

class Company extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      company: {}
    }

    this.handleApplication = this.handleApplication.bind(this);
  }

  async componentWillMount() {
    const { handle } = this.props.match.params;
    const username = localStorage.getItem('username');
    
    
    // This will grab all the jobs available as well as the users
    const promises = [JoblyApi.getCompany(handle), JoblyApi.getUser(username)];

    let [company, user] = await Promise.all(promises);
    
    const appliedJobIds = new Set(user.jobs.map(j => j.id));
    // O ( m + n)
    
    let jobs = company.jobs
    jobs = jobs.map(job => {
      return appliedJobIds.has(job.id) ? 
        {...job, key: uuid(), applied: true} : 
        {...job, key: uuid(), applied: false} 
    });

    company.jobs = jobs;

    this.setState({company});
  }

  async handleApplication(jobid) {


    const username = localStorage.getItem('username');
    await JoblyApi.applyToJob(jobid, username, 'applied');

    const { jobs } = this.state.company;
    let updatedJobs = jobs.map(j => {
      if (j.id === +jobid) {
        j.applied = true;
      }
      return j
    });

    this.setState({
      company: { 
        ...this.state.company,
        jobs: updatedJobs
      }
    });

  }
  render() {
    const { name, handle, description, jobs } = this.state.company;

    return (
      <div>
      <div className="py-3">
        <div onClick={this.handleClick} className="card mx-auto py2 CompBG" style={{ width: "50rem" }}>
            <h2 className="text-white">Company Profile</h2>
          <div className="card-body ThickFont">
            <h5 className="card-title"> {name} </h5>
            <h6 className="card-subtitle mb-2 text-muted"> {handle} </h6>
            <p className="card-text"> {description} </p>
          </div>
        </div>
      </div>
        { jobs ? jobs.map( job =>  <JobCard handleApplication={this.handleApplication} key={job.key} {...job}/>) :
        "Nothing" }
      </div>
    )
  }
}

export default withRouter(Company);

