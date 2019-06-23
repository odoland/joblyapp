import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import UserContext from "./UserContext"

class PrivateRoute extends Component {
  static contextType = UserContext;
  render() {

    if (!this.context || !this.context.username) {
      return <Redirect to="/login" />;
    }
    
    return (
          <Route
            exact={this.props.exact}
            path={this.props.path}
            render={this.props.render}
          />
    );
  }
}

export default PrivateRoute;