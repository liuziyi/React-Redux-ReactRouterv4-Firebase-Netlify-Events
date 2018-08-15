import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Base.css';
import { emailLogin, googleLogin } from '../actions/authActions';

class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: ''
    }

    this.inputChange = this.inputChange.bind(this);
    this.emailLogin = this.emailLogin.bind(this);
    this.googleLogin = this.googleLogin.bind(this);
    this.renderError = this.renderError.bind(this);
  }

  inputChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  emailLogin(e){
    e.preventDefault();
    if(this.state.email === '' || this.state.password === ''){
      this.setState({ errorMessage: 'Email and Password cannot be blank' });
    } else {
       this.props.emailLogin(this.state.email, this.state.password, () => {
         this.props.history.push('/dashboard');
       });
    }
  }

  renderError(){
    if(this.state.errorMessage){
      return(
        <div className="alert alert-danger">
          <strong>Opps!</strong> {this.state.errorMessage}
        </div>
      )
    }
  }

  googleLogin(){
    this.props.googleLogin(() => {
      this.props.history.push('/dashboard');
    });
  }

  render(){
    return(
      <div className="main-container">
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h1 className="display-4">Login</h1>
        </div>
        <form onSubmit={this.emailLogin}>
          {this.renderError()}
          <div className="form-group">
            <label>Email *</label>
            <input
              onChange={this.inputChange}
              value={this.state.email}
              className="form-control"
              type="text"
              name="email"
            />
          </div>
          <div className="form-group">
            <label>Password *</label>
            <input
              onChange={this.inputChange}
              value={this.state.password}
              className="form-control"
              type="password"
              name="password"
            />
          </div>
          <div>{this.props.errorMessage}</div>
          <br/>
          <button className="btn btn-dark btn-block">Login</button>
        </form>
        <br/>
        <button className="btn btn-danger btn-lg btn-block" onClick={this.googleLogin}>
          Login with Google
        </button>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps){
  return{
    errorMessage: state.auth.errorMessage
  }
}

export default connect(mapStateToProps,{ emailLogin, googleLogin })(Login);
