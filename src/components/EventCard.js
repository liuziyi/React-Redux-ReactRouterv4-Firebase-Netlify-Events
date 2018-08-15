import React from 'react';

const EventCard = props => (
  <div className="card" style={{ marginBottom: 20 }}>
    {props.children}
  </div>
);

export default EventCard;
