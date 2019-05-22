import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

const style = {
  color: 'skyblue'
}
class Navbar extends Component {


  render() {
    console.log("Rendering:", this.props.isLoggedIn, "logged in?");
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" exact to='/' activeStyle={style}>Jobly</NavLink>
        <NavLink className="navbar-brand" to='/companies' activeStyle={style}>Companies</NavLink>
        <NavLink className="navbar-brand" to='/jobs' activeStyle={style}>Jobs</NavLink>
        <NavLink className="navbar-brand" to='/profile' activeStyle={style}>Profile</NavLink>
        {this.props.isLoggedIn ? <button
          className="navbar-brand"
          onClick={this.props.logout}>
          Log Out
        </button> :
        
        <NavLink
          className="navbar-brand"
          to='/login' 
          activeStyle={style}>
          Log In
        </NavLink>}
      </nav>

    )
  }

}
export default Navbar;