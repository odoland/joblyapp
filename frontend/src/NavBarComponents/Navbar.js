import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { withRouter } from 'react-router';

const style = {
  color: 'skyblue'
}

class Navbar extends Component {

  render() {

    const LogoutButton = (
      <button
        id="Navbar-Logout"
        className="navbar-brand"
        onClick={this.props.logout}>
        Log Out
      </button>
    );

    const LoginNavLink = (
      <NavLink
        className="navbar-brand"
        to='/login' activeStyle={style}>
        Log In
      </NavLink>
    );

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="mr-5 order-0">
          <NavLink className="navbar-brand Jobly" exact to='/' activeStyle={style}><i className="fas fa-dove"></i> Jobly</NavLink>
        </div>
        <div className="order-1 mx-auto">
          <NavLink className="navbar-brand" exact to='/companies' activeStyle={style}>Companies</NavLink>
          <NavLink className="navbar-brand" exact to='/jobs' activeStyle={style}>Jobs</NavLink>
          <NavLink className="navbar-brand" exact to='/profile' activeStyle={style}>Profile</NavLink>
        </div>
        <div className="order-3 ml-5">
          {this.props.isLoggedIn ? LogoutButton : LoginNavLink}
        </div>
      </nav>
    )
  }

}
export default withRouter(Navbar);