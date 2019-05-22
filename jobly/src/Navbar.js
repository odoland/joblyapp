import React, { Componenet } from 'react';
import {NavLink} from 'react-router-dom';

class Navbar extends Component{
  // <NavLink to='/logout'>Log out</NavLink>

  render(){
    
    return (
      <nav>
        <NavLink to='/'>Jobly</NavLink>
        <NavLink to='/companies'>Companies</NavLink>
        <NavLink to='/jobs'>Jobs</NavLink>
        <NavLink to='/profile'>Profile</NavLink>
        

      </nav>
      
    )
  }

}
export default Navbar;