import React, { useState } from 'react';
import './CalendarWidget.css';

const CalendarWidget = ({ events, onDateSelect }) => {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 1)); // February 2026
  const [activeTab, setActiveTab] = useState('upcoming');

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Previous month days
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push({ day: '', isCurrentMonth: false });
    }
    
    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      const hasEvent = events.some(section => 
        section.fullDate.getDate() === i &&
        section.fullDate.getMonth() === month &&
        section.fullDate.getFullYear() === year
      );
      days.push({ day: i, isCurrentMonth: true, hasEvent });
    }

    return days;
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const days = getDaysInMonth(currentDate);
  const eventDates = events.filter(e => 
    e.fullDate.getMonth() === currentDate.getMonth() &&
    e.fullDate.getFullYear() === currentDate.getFullYear()
  );

  return (
    <div className="calendar-widget">
      <div className="calendar-header">
        <button onClick={prevMonth} className="calendar-nav">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>
        <h3 className="calendar-title">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h3>
        <button onClick={nextMonth} className="calendar-nav">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>
      </div>

      <div className="calendar-weekdays">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
          <div key={i} className="calendar-weekday">{day}</div>
        ))}
      </div>

      <div className="calendar-days">
        {days.map((day, index) => (
          <div
            key={index}
            className={`calendar-day ${!day.isCurrentMonth ? 'inactive' : ''} ${day.hasEvent ? 'has-event' : ''}`}
            onClick={() => day.isCurrentMonth && onDateSelect(day.day)}
          >
            {day.day}
          </div>
        ))}
      </div>

      <div className="calendar-tabs">
        <button 
          className={`calendar-tab ${activeTab === 'upcoming' ? 'active' : ''}`}
          onClick={() => setActiveTab('upcoming')}
        >
          Upcoming
        </button>
        <button 
          className={`calendar-tab ${activeTab === 'past' ? 'active' : ''}`}
          onClick={() => setActiveTab('past')}
        >
          Past
        </button>
      </div>

      <div className="calendar-map">
        <div className="map-placeholder">
          <div className="map-marker" style={{ top: '60%', left: '45%' }}>
            <div className="marker-dot"></div>
          </div>
          <div className="map-marker" style={{ top: '55%', left: '52%' }}>
            <div className="marker-dot"></div>
          </div>
          <p className="map-text">Switzerland</p>
          <p className="map-text-small">Liechtenstein</p>
        </div>
      </div>
    </div>
  );
};

export default CalendarWidget;
