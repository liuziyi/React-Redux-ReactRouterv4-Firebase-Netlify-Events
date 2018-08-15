import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';

import './Base.css';
import { getUserEvents } from '../actions/eventActions';

class EventList extends Component{
  componentDidMount(){
    // console.log('eventlist componentDidUpdate ', this.props.userId)
    this.props.getUserEvents(this.props.userId);
  }

  renderEvents(){
    return _.map(this.props.events, (event, key) => {
      return(
        <tr key={key}>
          <td>{event.title}</td>
          <td>{event.date}</td>
          <td>{event.time}</td>
          <td>{event.category}</td>
          <td>
            <Link to={`events/${key}`} className="btn btn-outline-dark">Details</Link>
          </td>
        </tr>
      )
    });
  }

  render(){
    return(
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Category</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {this.renderEvents()}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps(state, ownProps){
  return{
    userId: state.auth.authenticated,
    events: state.event.user,
  }
}

export default connect(mapStateToProps, { getUserEvents })(EventList);
