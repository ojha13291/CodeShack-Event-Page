import React from 'react';
import './Sidebar.css';
import myPhoto from '../../assets/my_photo.jpeg';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <div className="logo-icon">CS</div>
        </div>
        <h2 className="sidebar-title">Club events</h2>
        <p className="sidebar-description">
           Tech Events around the college organized by Codeshack.
        </p>
      </div>

      <div className="sidebar-actions">
        <button className="btn-primary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          Add to calendar
        </button>
        <button className="btn-secondary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
            <polyline points="16 6 12 2 8 6"/>
            <line x1="12" y1="2" x2="12" y2="15"/>
          </svg>
          Share
        </button>
      </div>

      <div className="sidebar-section">
        <h3 className="section-title">Organizer</h3>
        <div className="organizer-info">
          <div className="organizer-avatar">
            <img 
              src={myPhoto} 
              alt="Ayush Ojha"
            />
          </div>
          <div className="organizer-details">
            <div className="organizer-name">Ayush Ojha</div>
            <div className="organizer-company">Technical Team, Codeshack</div>
          </div>
        </div>
      </div>

      <div className="sidebar-section">
        <h3 className="section-title">About</h3>
        <p className="about-text">
          Join us for exciting Tech events, meetups, and conferences organized by 
          Codeshack club of Sir.MVIT.
        </p>
      </div>

      <div className="sidebar-section">
        <h3 className="section-title">Links</h3>
        <div className="links-list">
          <a href="#" className="link-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
            </svg>
            Website
          </a>
          <a href="#" className="link-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
            </svg>
            Twitter
          </a>
          <a href="#" className="link-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </div>

      <div className="sidebar-footer">
        <button className="btn-text">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="16" x2="12" y2="12"/>
            <line x1="12" y1="8" x2="12.01" y2="8"/>
          </svg>
          Report this calendar
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
