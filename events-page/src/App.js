import React, { useState } from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import CalendarWidget from './components/CalendarWidget/CalendarWidget';
import TimelineSection from './components/TimelineSection/TimelineSection';
import SearchModal from './components/SearchModal/SearchModal';
import './App.css';

const App = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [viewMode, setViewMode] = useState('list');
  const [searchQuery, setSearchQuery] = useState('');

  // Event data
  const allEvents = [
    {
      date: '17 Feb 2026',
      weekday: 'Tuesday',
      fullDate: new Date('2026-02-17'),
      events: [
        {
          id: 1,
          startTime: '10:00 PM',
          endTime: '5:30 PM',
          timezone: 'GMT+1',
          title: 'Banglore.AI meetup',
          organizer: 'By Nathan Benaich ',
          location: 'Church-street, Banglore',
          category: 'AI'
        }
      ]
    },
    {
      date: '19 Feb 2026',
      weekday: 'Thursday',
      fullDate: new Date('2026-02-19'),
      events: [
        {
          id: 2,
          startTime: '10:00 PM',
          endTime: '5:30 PM',
          timezone: 'GMT+1',
          title: 'Zurich.AI meetup',
          organizer: 'By Brad Traversy',
          location: 'Zürich, Zürich',
          category: 'AI'
        }
      ]
    },
    {
      date: '12 Jun 2026',
      weekday: 'Friday',
      fullDate: new Date('2026-06-12'),
      events: [
        {
          id: 3,
          startTime: '1:00 PM',
          endTime: '8:30 AM',
          timezone: 'GMT+1',
          title: 'The 10th Research and Applied AI Summit (RAAIS)',
          organizer: 'By The RAAIS Foundation',
          location: 'London',
          category: 'AI and Research',
          isExternal: true
        }
      ]
    }
  ];

  // Filter events based on search
  const filteredEvents = allEvents
    .filter(section => {
      if (!searchQuery) return true;
      return section.events.some(event => 
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    })
    .map(section => ({
      ...section,
      events: section.events.filter(event =>
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.location.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }));

  return (
    <div className="app">
      <div className="app-layout">
        <Sidebar />
        
        <div className="app-content">
          <Header 
            onSearchClick={() => setSearchOpen(true)}
            onCalendarClick={() => setCalendarOpen(!calendarOpen)}
            onViewModeChange={setViewMode}
            viewMode={viewMode}
          />
          
          <main className="main-content">
            <div className="content-grid">
              <div className="events-section">
                {filteredEvents.map((section, index) => (
                  <TimelineSection
                    key={index}
                    date={section.date}
                    weekday={section.weekday}
                    events={section.events}
                  />
                ))}
                
                {filteredEvents.length === 0 && (
                  <div className="no-events">
                    <p>No events found matching your search.</p>
                  </div>
                )}
              </div>
              
              {calendarOpen && (
                <div className="calendar-section">
                  <CalendarWidget events={allEvents} />
                </div>
              )}
            </div>
          </main>
        </div>
      </div>

      {searchOpen && (
        <SearchModal 
          onClose={() => setSearchOpen(false)}
          onSearch={setSearchQuery}
          events={allEvents}
        />
      )}
    </div>
  );
};

export default App;
