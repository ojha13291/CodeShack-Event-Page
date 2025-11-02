import React, { useState, useEffect } from 'react';
import './SearchModal.css';

const SearchModal = ({ onClose, onSearch, events }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query.length > 0) {
      const filtered = events.flatMap(section => 
        section.events.filter(event =>
          event.title.toLowerCase().includes(query.toLowerCase()) ||
          event.location.toLowerCase().includes(query.toLowerCase()) ||
          event.organizer.toLowerCase().includes(query.toLowerCase())
        ).map(event => ({ ...event, date: section.date }))
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query, events]);

  const handleSearch = () => {
    onSearch(query);
    onClose();
  };

  return (
    <div className="search-modal-overlay" onClick={onClose}>
      <div className="search-modal" onClick={(e) => e.stopPropagation()}>
        <div className="search-modal-header">
          <input
            type="text"
            placeholder="Search events..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            autoFocus
            className="search-input"
          />
          <button onClick={onClose} className="search-close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <div className="search-results">
          {results.length > 0 ? (
            results.map((event) => (
              <div key={event.id} className="search-result-item">
                <div className="search-result-content">
                  <h4>{event.title}</h4>
                  <p className="search-result-meta">
                    {event.date} • {event.location}
                  </p>
                </div>
              </div>
            ))
          ) : query.length > 0 ? (
            <div className="search-empty">
              <p>No events found for "{query}"</p>
            </div>
          ) : (
            <div className="search-empty">
              <p>Start typing to search events...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
