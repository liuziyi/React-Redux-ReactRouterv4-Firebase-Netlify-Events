import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Base.css';
import requireAuth from './requireAuth';
import EventList from './EventList';

class Dashboard extends Component{
  render(){
    return(
      <div className="main-container">
        <div className="row" style={{ marginTop: 25, marginBottom: 50 }}>
          <div className="col-11"><h3>Your Events</h3></div>
          <div className="col-1 d-flex justify-content-end">
            <Link className="text-muted" to="/add">
              <button type="button" className="btn btn-outline-dark" style={{ width: 150 }}>+ Add Event</button>
            </Link>
          </div>
        </div>
        <EventList/>
      </div>
    )
  }
}

export default requireAuth(Dashboard);
