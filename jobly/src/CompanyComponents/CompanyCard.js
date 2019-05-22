import React, { Component } from 'react'

export default class CompanyCard extends Component {
  constructor(props) {
    super(props)
    
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    this.props.history.push(`/company/${this.props.handle}`);
  }

  render() {

    const { handle, name, description, logo_url } = this.props;
    return (
        <div onClick={this.handleClick} className="card">
          <p> {handle} {name} </p>
          <img className="card-img-top" alt={description} src={logo_url} />
          
        </div>
        )
  }
}
