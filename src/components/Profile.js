import React, { Component } from 'react';

import './Base.css';
import requireAuth from './requireAuth';

class Profile extends Component{
  render(){
    return(
      <div className="main-container">
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h1 className="display-4">Your Profile</h1>
        </div>
      </div>
    )
  }
}

export default requireAuth(Profile);
