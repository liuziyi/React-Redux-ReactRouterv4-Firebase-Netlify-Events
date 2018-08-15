import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Base.css';
import { getUserEventDetails, deleteEvent } from '../actions/eventActions';
import requireAuth from './requireAuth';

class EventDetails extends Component{
  constructor(props){
    super(props);
    this.deleteEvent = this.deleteEvent.bind(this);
  }

  componentDidMount(){
    // console.log('EventDetails componentDidMount ', localStorage.getItem('userId'))
    const userId = localStorage.getItem('userId');
    const eventId = this.props.match.params.id;
    this.props.getUserEventDetails(userId, eventId);
  }

  deleteEvent(){
    const userId = localStorage.getItem('userId');
    const eventId = this.props.match.params.id;
    this.props.deleteEvent(userId, eventId);
    this.props.history.push('/dashboard');
  }

  render(){
    if(!this.props.event){
      return (<div>Loading..</div>)
    }

    return(
      <div className="main-container">
        <div className="row" style={{ marginTop: 25, marginBottom: 50 }}>
          <div className="col-1">
            <Link to="/dashboard" style={{ color: 'black' }}>Back</Link>
          </div>
          <div className="col-11"></div>
        </div>
        <div className="blog-post">
          <h2 className="blog-post-title">{this.props.event.title}</h2>
          <p className="blog-post-meta">{this.props.event.category}</p>
        </div>
        <nav className="blog-pagination">
          <button className="btn btn-outline-primary" style={{ marginRight: 20 }}>
            <Link to={`${this.props.match.params.id}/edit`}>Edit</Link>
          </button>
          <button className="btn btn-outline-danger" onClick={this.deleteEvent}>
            Delete
          </button>
        </nav>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps){
  return{
    event: state.event.details,
  }
}

export default connect(mapStateToProps, { getUserEventDetails, deleteEvent })(requireAuth(EventDetails));
