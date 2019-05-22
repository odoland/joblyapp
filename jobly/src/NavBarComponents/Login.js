import React, { Component } from 'react'
import JoblyApi from '../JoblyApi';

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      new: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleNew = this.toggleNew.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault();

    // if the form has email then call JoblyApi.registerUser instead and fix state 
    // to include register fields
    let token = await JoblyApi.loginUser(this.state.username, this.state.password);
    
    // Successful log in
    if (token) {
      this.props.login(token);
      this.props.history.push('/')
    } else {
      this.props.history.push('/login')
    }

  }

  toggleNew() {
    this.setState({ new: !this.state.new })
  }



  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }


  render() {
    const newForm = (
      <React.Fragment>
        <label htmlFor="firstName">First Name</label>
        <input onChange={this.handleChange} name="firstName" className="form-control mr-sm-2" type="text" placeholder="Enter First Name here" />

        <label htmlFor="lastName">Last Name</label>
        <input onChange={this.handleChange} name="lastName" className="form-control mr-sm-2" type="text" placeholder="Enter Last Name here" />

        <label htmlFor="Email">Email</label>
        <input onChange={this.handleChange} name="Email" className="form-control mr-sm-2" type="email" placeholder="Enter Email here" />
        
        <label htmlFor="photoUrl">photo Url</label>
        <input onChange={this.handleChange} name="photoUrl" className="form-control mr-sm-2" type="url" placeholder="Enter photo Url here" />
      </React.Fragment>)
    
    return (
      <div>
        <button onClick={this.toggleNew}>{this.state.new ? 'Log In': 'New User'}</button>
          
          <form onSubmit={this.handleSubmit} className="form-inline my-2 my-lg-0">
            <label htmlFor="username">Username</label>
            <input onChange={this.handleChange} name="username" className="form-control mr-sm-2" type="text" placeholder="Enter username here" />

            <label htmlFor="password">Password</label>
            <input onChange={this.handleChange} name="password" className="form-control mr-sm-2" type="password" placeholder="Enter password here" />

            {this.state.new ? newForm : ''}
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">{this.state.new ? 'Register' : 'Log In'}</button>
          </form>

      </div>
    )
  }
}