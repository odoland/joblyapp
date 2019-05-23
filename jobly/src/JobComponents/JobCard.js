import React, { Component } from 'react'

export default class JobCard extends Component {
  constructor(props) {
    super(props);
    this.handleApply = this.handleApply.bind(this);
  }

  handleApply(evt) {
    const jobid = evt.target.id;
    this.props.handleApplication(jobid);
  }
  render() {
    const { id, company_handle, title, salary, equity, applied } = this.props;
    const applyButton = <button id={id} onClick={this.handleApply} className="btn btn-danger">Apply!</button>;
    const disabledButton = <button id={id} className="btn btn-danger" disabled>Applied!</button>;

    return (
      <div className="py-3">
        <div className="card mx-auto" style={{ width: "30rem" }}>
          <div className="card-body">
            <h5 className="card-title"> {title} <i>{company_handle}</i> </h5>
            <h6 className="card-subtitle mb-2 text-muted"> ${salary} </h6>
            <p className="card-text"> Equity: {equity} </p>
          </div>
          { applied ? disabledButton : applyButton }
        </div>
      </div>
    )
  }
}