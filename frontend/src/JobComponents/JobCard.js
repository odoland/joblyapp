import React, { Component } from 'react';
import { withRouter } from "react-router";


class JobCard extends Component {
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
    const applyButton = <button id={id} onClick={this.handleApply} className="btn btn-info">Apply!</button>;
    const disabledButton = <button id={id} className="btn btn-secondary" disabled>Applied!</button>;

    return (
      <div className="py-3">
        <div className="card mx-auto CardBG" style={{ width: "50rem" }}>
          <div className="card-body">
            <h5 className="card-title"> {title} <i>{company_handle}</i> </h5>
            <h6 className="card-subtitle mb-2 text-muted">{salary && `$${salary}`} </h6>
            <p className="card-text"> {equity && `Equity: ${equity}`} </p>
          </div>
          { applied ? disabledButton : applyButton }
        </div>
      </div>
    )
  }
}

export default withRouter(JobCard);
