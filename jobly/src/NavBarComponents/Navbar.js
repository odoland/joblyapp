import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

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
        <div class="mr-5 order-0">
          <NavLink className="navbar-brand" exact to='/' activeStyle={style}>Jobly</NavLink>
        </div>
        <div class="order-1 mx-auto">
          <NavLink className="navbar-brand" exact to='/companies' activeStyle={style}>Companies</NavLink>
          <NavLink className="navbar-brand" exact to='/jobs' activeStyle={style}>Jobs</NavLink>
          <NavLink className="navbar-brand" exact to='/profile' activeStyle={style}>Profile</NavLink>
        </div>
        <div class="order-3 ml-5">
          {this.props.isLoggedIn ? LogoutButton : LoginNavLink}
        </div>
      </nav>
    )
  }

}
export default Navbar;