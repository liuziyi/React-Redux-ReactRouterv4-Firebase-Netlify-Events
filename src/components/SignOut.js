import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Base.css';
import { signOut } from '../actions/authActions';

class SignOut extends Component{
  componentDidMount(){
    this.props.signOut();
  }

  render(){
    return(
      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1><i className="far fa-frown"></i></h1>
          <p className="lead">Sorry to see you go</p>
      </div>
    )
  }
}

export default connect(null, { signOut })(SignOut);
