import React, { Component } from 'react';
import { withRouter } from "react-router";


class Home extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1 className="display-4">Jobly</h1>
          <p>Apply for jobs here</p>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);

