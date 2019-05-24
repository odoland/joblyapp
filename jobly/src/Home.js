import React, { Component } from 'react';
import { withRouter } from "react-router";
import img from './hiringChart.jpg';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div style={{margin: "100px"}}>
        <div className="jumbotron" >
          <h1 className="display-4" >Jobly</h1>
          <div className='Mars'>
            <h2 className='aboutTitle'> About us </h2> 
            <p className='aboutText' >Our company was founded on Mars in the year 2250 to find Humans jobs on Mars. Start-Up funding provided by the Elon Musk foundation as part of the <i>Mars First Initiative</i>.</p>
          </div>
          <img src={img} alt='' />
          <br />
          <strong> <i> ~It's only up from here! </i></strong>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);

