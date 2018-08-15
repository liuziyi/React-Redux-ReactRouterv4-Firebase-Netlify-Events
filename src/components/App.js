import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import './Base.css';
import { getPublicEvents } from '../actions/eventActions';
import EventCard from './EventCard';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      events: {}
    }
  }

  componentDidMount(){
    this.props.getPublicEvents();
  }

  renderEvents(){
    return _.map(this.props.events, (event, key) => {
      return(
        <EventCard key={key}>
          <div className="card-body">
            <h5 className="card-title">{event.title}</h5>
            <p className="card-text">{event.category}</p>
          </div>
        </EventCard>
      )
    });
  }

  render() {
    return (
      <div className="main-container">
        <div className="text-center">
          <h2>List of Events</h2>
        </div>
        {this.renderEvents()}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  return{
    events: state.event.public
  }
}

export default connect(mapStateToProps, { getPublicEvents })(App);
