import React, { Component } from 'react';
import { withRouter } from "react-router";


class CompanyCard extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    this.props.history.push(`/company/${this.props.handle}`);
  }

  render() {

    const { handle, name, description } = this.props;
    let temp_url = "http://www.qrstuff.com/images/sample.png";
    // logo url is broken currently
    return (
      <div className="py-3">
        <div onClick={this.handleClick} className="card mx-auto py2" style={{ width: "50rem" }}>
          <img className="card-img-top mx-auto" style={{ height: "10rem", width: "10rem" }} alt="Not available" src={temp_url} />
          <div className="card-body">
            <h5 className="card-title"> {name} </h5>
            <h6 className="card-subtitle mb-2 text-muted"> {handle} </h6>
            <p className="card-text"> {description} </p>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(CompanyCard);
