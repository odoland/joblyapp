import React, { Component } from 'react';
import { withRouter } from "react-router";
import _ from 'lodash';


const DEBOUNCE = 500;
class Search extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    }
    this.passToParentSubmit = _.debounce(this.passToParentSubmit.bind(this), DEBOUNCE);
    this.handleChange = this.handleChange.bind(this);
  }

  passToParentSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state.search);
  }


  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
    this.passToParentSubmit(e);
  }

  
  render() {
    return (
      <form onSubmit={this.passToParentSubmit} className="mx-auto" style={{width: "400px"}}>
        <input onChange={this.handleChange} name="search" className="form-control" type="search" placeholder="Search" aria-label="Search"/>
        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
      </form>
    )
  }
}

export default withRouter(Search);
