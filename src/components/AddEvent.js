import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import { connect } from 'react-redux';

import './Base.css';
import { addUserEvent } from '../actions/eventActions';
import requireAuth from './requireAuth';

class AddEvent extends Component{
  constructor(props){
    super(props);
    this.state = {
      title: '',
      date: moment(),
      time: {
        time: '',
        period: ''
      },
      category: '',
      errorMessage: ''
    }

    this.inputChange = this.inputChange.bind(this);
    this.dateChange = this.dateChange.bind(this);
    this.timeChange = this.timeChange.bind(this);
    this.addUserEvent = this.addUserEvent.bind(this);
    this.renderError = this.renderError.bind(this);
  }

  inputChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  dateChange(date){
    this.setState({ date });
  }

  timeChange(e){
    this.setState({
      time: {
        ...this.state.time,
        [e.target.name]: e.target.value
      }
    });
  }

  addUserEvent(e){
    e.preventDefault();
    if(this.state.title === '' || this.state.category === '' || this.state.date === '' || this.state.time.time === '' || this.state.time.period === ''){
      this.setState({ errorMessage: 'Title, Category, Date and Time cannot be blank' });
    } else {
      const time = this.state.time.time + ' ' + this.state.time.period;
      const event = {
        title: this.state.title,
        date: this.state.date.format('LL'),
        time,
        category: this.state.category
      }

      // console.log('New event ', event)
      this.props.addUserEvent(this.props.userId, event);
      this.props.history.push('/dashboard')
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

  render(){
    // console.log('USER ID ', this.props.userId)
    return(
      <div className="main-container">
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h1 className="display-4">Add New Event</h1>
        </div>
        <form onSubmit={this.addUserEvent}>
          {this.renderError()}
          <div className="form-group">
            <label>Title *</label>
            <input
              onChange={this.inputChange}
              value={this.state.title}
              className="form-control"
              type="text"
              name="title"
            />
          </div>
          <div className="form-group">
            <label>Category *</label>
            <select onChange={this.inputChange} className="form-control" name="category">
              <option value="">Select</option>
              <option value="Technology">Technology</option>
              <option value="Science">Science</option>
              <option value="Sports">Sports</option>
              <option value="Music">Music</option>
              <option value="Dance">Dance</option>
              <option value="Fashion">Fashion</option>
              <option value="Business">Business</option>
              <option value="Politics">Politics</option>
            </select>
          </div>
          <div className="form-group row">
            <div className="col-1"><label>Date *</label></div>
            <div className="col-11">
              <DatePicker
                selected={this.state.date}
                onChange={this.dateChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <div className="col-1"><label>Time *</label></div>
            <div className="col-8">
              <input
                onChange={this.timeChange}
                className="form-control"
                type="text"
                name="time"
              />
            </div>
            <div className="col-2">
              <select className="form-control" name="period" onChange={this.timeChange}>
                <option>Select (AM/PM)</option>
                <option>AM</option>
                <option>PM</option>
              </select>
            </div>
          </div>

          <button className="btn btn-dark btn-block">Add Event</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps){
  return{
    userId: state.auth.authenticated
  }
}

export default connect(mapStateToProps, { addUserEvent })(requireAuth(AddEvent));
