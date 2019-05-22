import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Navbar extends Component{
  // <NavLink to='/logout'>Log out</NavLink>

  render(){
    
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to='/'>Jobly</NavLink>
        <NavLink  className="navbar-brand" to='/companies'>Companies</NavLink>
        <NavLink className="navbar-brand" to='/jobs'>Jobs</NavLink>
        <NavLink className="navbar-brand" to='/profile'>Profile</NavLink> 
      </nav>
      
    )
  }

}
export default Navbar;