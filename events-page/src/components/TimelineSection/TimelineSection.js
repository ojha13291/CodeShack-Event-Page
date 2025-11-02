import React from 'react';
import EventCard from '../EventCard/EventCard';
import './TimelineSection.css';

const TimelineSection = ({ date, weekday, events }) => {
  return (
    <div className="timeline-section">
      <div className="timeline-line"></div>
      <div className="timeline-header">
        <div className="timeline-dot"></div>
        <div className="timeline-date">
          <div className="date-main">{date}</div>
          <div className="date-weekday">{weekday}</div>
        </div>
      </div>
      <div className="timeline-content">
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </div>
  );
};

export default TimelineSection;
