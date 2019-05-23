import React, { Component } from 'react'
import JoblyApi from '../JoblyApi';
import './Login.css';
/** Component that renders log in / registration Form  */
export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newUser: false, // If true, will show email, first_name and last_name for registration
      username: '',
      password: '',
      email: '',
      first_name: '',
      last_name: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleNew = this.toggleNew.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault();

    // Grab a token - either from registration or loggin in
    let token, username;
    if (this.state.newUser) {
      let { newUser, ...user } = this.state;
      [token, username] = await JoblyApi.registerUser(user);
    } else {
      [token, username] = await JoblyApi.loginUser(this.state.username, this.state.password);
    }

    // Successful log in / registration
    if (token) {
      this.props.login(token, username);
      this.props.history.push('/')
    } else {
      this.props.history.push('/login')
    }
  }

  toggleNew() {
    this.setState({ newUser: !this.state.newUser })
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }


  render() {

    // Extra Fields for registration
    const newForm = (
      <React.Fragment>

        <div className="form-group mb-3">
          <label htmlFor="first_name">First Name</label>
          <input onChange={this.handleChange} name="first_name" className="form-control" type="text" placeholder="Enter First Name here" />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="last_name">Last Name</label>
          <input onChange={this.handleChange} name="last_name" className="form-control" type="text" placeholder="Enter Last Name here" />
        </div>

        <div className="form-group mb-5">
          <label htmlFor="email">Email</label>
          <input onChange={this.handleChange} name="email" className="form-control" type="email" placeholder="Enter Email here" />
        </div>
      </React.Fragment>)

    return (
      <div className="py-5">
        <div className="card mx-auto" style={{ width: "30rem" }}>

          <button
            className="btn btn-outline-secondary"
            onClick={this.toggleNew}>{this.state.newUser ? 'Log In' : 'No account yet? Register'}
          </button>
          <div className="card-body">
            {/* Button to toggle Log In vs Registration */}

            <form onSubmit={this.handleSubmit}>

              <div className="form-group mb-3">
                <label htmlFor="username">Username</label>
                <input onChange={this.handleChange} name="username" className="form-control" type="text" placeholder="Enter username here" />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="password">Password</label>
                <input onChange={this.handleChange} name="password" className="form-control" type="password" placeholder="Enter password here" />
              </div>

              {this.state.newUser ? newForm : ''}

              <button className="btn btn-success my-2 my-sm-0" type="submit">{this.state.newUser ? 'Register' : 'Log In'}</button>

            </form>
          </div>

        </div>
      </div>
    )
  }
}