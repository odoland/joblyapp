import React, { Component } from 'react';
import JoblyApi from '../JoblyApi';
import JobCard from '../JobComponents/JobCard';
import uuid from 'uuid/v4';

export default class Company extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      company: {}
    }
  }

  async componentWillMount() {
    const { handle } = this.props.match.params;
    const company = await JoblyApi.getCompany(handle);


    company.jobs = company.jobs.map(j => ({...j, key: uuid()}));

    this.setState({company});
  }
  render() {
    const { jobs } = this.state.company;
    return (
      <div>
        { jobs ? jobs.map( job =>  <JobCard  key={job.key} {...job}/>) :
        "Nothing" }
      </div>
    )
  }
}
