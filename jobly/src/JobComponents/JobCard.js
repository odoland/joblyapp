import React, { Component } from 'react'

export default class JobCard extends Component {

  render() {
    const { company_handle, title, salary, equity } = this.props;
    console.log(this.props);
    return (
      <div className="py-3">
        <div className="card mx-auto" style={{ width: "30rem" }}>
          <div className="card-body">
            <h5 className="card-title"> {title} <i>{company_handle}</i> </h5>
            <h6 className="card-subtitle mb-2 text-muted"> ${salary} </h6>
            <p className="card-text"> Equity: {equity} </p>
          </div>
          <button className="btn btn-danger">Apply!</button>
        </div>
      </div>
    )
  }
}