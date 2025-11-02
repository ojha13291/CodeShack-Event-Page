import React from 'react';
import './EventCard.css';

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <div className="event-card-content">
        <div className="event-info">
          <div className="event-time">
            {event.startTime} - {event.endTime} {event.timezone}
          </div>
          <h3 className="event-title">{event.title}</h3>
          <div className="event-meta">
            <div className="event-meta-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              <span>{event.organizer}</span>
            </div>
            <div className="event-meta-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>{event.location}</span>
            </div>
          </div>
        </div>
        <div className="event-image">
          <img src={event.image} alt={event.title} />
        </div>
      </div>
    </div>
  );
};

export default EventCard;
