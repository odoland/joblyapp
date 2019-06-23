import React, { Component } from 'react';
import { withRouter } from "react-router";
import './Home.css';
import logoBG from './logo-bg.jpg';

class Home extends Component {
  render() {
    return (
      <div style={{
        margin: "100px",
      }}>
        <div className="jumbotron" style={{ 
            backgroundImage: `url('${logoBG}')`,
            backgroundSize: 'cover',
            borderStyle: 'solid',
            borderColor: '#ffffff #ffffff',           
            }}>
          <h1 className="display-4 Jobly" ><i className="fas fa-dove"></i> Jobly</h1>
          <br />
        </div>
      </div>
    );
  }
}

export default withRouter(Home);

