import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

class Header extends Component{
  renderLinks(){
    if(this.props.auth){
      return(
        <div className="col-4 d-flex justify-content-end align-items-center">
          <Link className="text-muted" to="/dashboard" style={{ marginRight: 20 }}>
            Your Events
          </Link>
          <Link className="text-muted" to="/profile" style={{ marginRight: 20 }}>
            Your Profile
          </Link>
          <Link className="text-muted" to="/signout">
            <button type="button" className="btn btn-dark">Sign Out</button>
          </Link>
        </div>
      )
    } else {
      return(
        <div className="col-4 d-flex justify-content-end align-items-center">
          <Link className="text-muted" to="/login" style={{ marginRight: 10 }}>
            <button type="button" className="btn btn-outline-dark">Login</button>
          </Link>
          <Link className="text-muted" to="/signup">
            <button type="button" className="btn btn-dark">Sign Up</button>
          </Link>
        </div>
      )
    }
  }

  render(){
    return(
      <header className="blog-header py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-4 pt-1">
            <Link className="blog-header-logo text-dark" to="/">Z</Link>
          </div>
          <div className="col-4 text-center"></div>
          {this.renderLinks()}
        </div>
      </header>
    )
  }
}

function mapStateToProps(state, ownProps){
  return{
    auth: state.auth.authenticated
  }
}

export default connect(mapStateToProps)(Header);
