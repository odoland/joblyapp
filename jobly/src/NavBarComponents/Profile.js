import React, { Component } from 'react';
import JoblyApi from '../JoblyApi';
import { withRouter } from 'react-router';

class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      password: '',
      email: '',
      first_name: '',
      last_name: '',
      photo_url: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async componentWillMount(){
    let user = await JoblyApi.getUser(localStorage.getItem('username'));
    this.setState({...user});
  }

  async handleSubmit(e){
    e.preventDefault();
    let body = {...this.state};
    for (let key in body){
      if (!body[key] || key === 'jobs')
        delete body[key];
    }

    let user = await JoblyApi.updateUser(localStorage.getItem('username'), body);
    if (user){
      this.props.history.push('/');
    } else {
      this.props.history.push('/profile');
    }
    
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (

      <div className="py-5">
        <div className="card mx-auto" style={{ width: "30rem" }}>
          <div className="card-body">
            {/* Button to toggle Log In vs Registration */}

            <form onSubmit={this.handleSubmit}>

              <div className="form-group mb-3">
                <label htmlFor="password">Password</label>
                <input onChange={this.handleChange} name="password" className="form-control" value={this.state.password} type="password" placeholder="Change your password here" />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="first_name">First Name</label>
                <input onChange={this.handleChange} name="first_name" className="form-control" value={this.state.first_name || ''} type="text" placeholder="Enter First Name here" />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="last_name">Last Name</label>
                <input onChange={this.handleChange} name="last_name" className="form-control" value={this.state.last_name || ''} type="text" placeholder="Enter Last Name here" />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="email">Email</label>
                <input onChange={this.handleChange} name="email" className="form-control" value={this.state.email || ''} type="email" placeholder="Enter your Email here" />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="photoUrl">Photo Url</label>
                <input onChange={this.handleChange} name="photoUrl" className="form-control" value={this.state.photo_url || ''} type="Url" placeholder="Enter a Photo Url here" />
              </div>
              <button className="btn btn-success my-2 my-sm-0" type="submit">Edit</button>

            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Profile);
