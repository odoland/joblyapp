import React, { Component } from 'react'

export default class JobCard extends Component {

  render() {
    const { company_handle, title, salary, equity, state, } = this.props;
    return (
        <div className="card">
          <p> {title} {company_handle} </p>
          <p> {salary} {state} {equity} </p>
          <button>Apply!</button>
        </div>
        )
  }
}