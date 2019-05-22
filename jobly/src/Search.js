import React, { Component } from 'react'

export default class Search extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    this.props.handleSubmit(e.target.value);
  }


  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-inline my-2 my-lg-0">
        <input onChange={this.handleChange} name="search" className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    )
  }
}
