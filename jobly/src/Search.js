import React, { Component } from 'react'

export default class Search extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    }
    this.passToParentSubmit = this.passToParentSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  passToParentSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    this.props.handleSubmit(this.state.search);
  }


  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
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
