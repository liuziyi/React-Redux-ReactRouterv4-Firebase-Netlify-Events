import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import { connect } from 'react-redux';

import './Base.css';
import { getUserEventDetails, editEvent } from '../actions/eventActions';
import requireAuth from './requireAuth';

class EventEdit extends Component{
  constructor(props){
    super(props);
    this.state = {
      title: '',
      date: moment(),
      time: {
        time: '',
        period: ''
      },
      category: ''
    }

    this.inputChange = this.inputChange.bind(this);
    this.dateChange = this.dateChange.bind(this);
    this.timeChange = this.timeChange.bind(this);
    this.editUserEvent = this.editUserEvent.bind(this);
  }

  componentDidMount(){
    // console.log('EventDetails componentDidMount ', localStorage.getItem('userId'))
    const userId = localStorage.getItem('userId');
    const eventId = this.props.match.params.id;
    this.props.getUserEventDetails(userId, eventId);
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

  editUserEvent(e){
    e.preventDefault();
    const userId = localStorage.getItem('userId');
    const eventId = this.props.match.params.id;

    if(this.state.time.time === ''){
      const currentTime = this.props.event.time;
      const event = {
        title: this.state.title || this.props.event.title,
        date: this.state.date.format('LL'),
        time: currentTime,
        category: this.state.category || this.props.event.category
      }
      // console.log('Edit event ', event)
      this.props.editEvent(userId, eventId, event);
      this.props.history.push('/dashboard');
    } else if(this.state.time.period === ''){
      const currentTime = this.props.event.time;
      const event = {
        title: this.state.title || this.props.event.title,
        date: this.state.date.format('LL'),
        time: currentTime,
        category: this.state.category || this.props.event.category
      }
      // console.log('Edit event ', event)
      this.props.editEvent(userId, eventId, event);
      this.props.history.push('/dashboard');
    } else {
      const newTime = this.state.time.time + ' ' + this.state.time.period;
      const event = {
        title: this.state.title || this.props.event.title,
        date: this.state.date.format('LL'),
        time: newTime,
        category: this.state.category || this.props.event.category
      }
      // console.log('Edit event ', event)
      this.props.editEvent(userId, eventId, event);
      this.props.history.push('/dashboard');
    }
  }

  render(){
    // console.log('USER ID ', this.props.userId)
    if(!this.props.event){
      return (<div>Loading..</div>)
    }

    return(
      <div className="main-container">
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h1 className="display-4">Add New Event</h1>
        </div>
        <form onSubmit={this.editUserEvent}>
          <div className="form-group">
            <label>Title *</label>
            <input
              onChange={this.inputChange}
              placeholder={this.props.event.title}
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
                placeholder={this.props.event.time}
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

          <button className="btn btn-dark btn-block">Edit</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps){
  return{
    event: state.event.details
  }
}

export default connect(mapStateToProps, { getUserEventDetails, editEvent })(requireAuth(EventEdit));
