import React from 'react';
import { Link } from 'react-router-dom';
import './Announcement.css';

function Announcement() {
    return (
        
        <div className="announcementDiv">
            <h2>Announcement</h2>
            <div className="announcementThreads">
                <div className="announcement">
                    <h3>Title</h3>
                    <p>Content</p>
                </div>
                <div className="announcement">
                    <h3>Title</h3>
                    <p>Content</p>
                </div>
                <div className="announcement">
                    <h3>Title</h3>
                    <p>Content</p>
                </div>
            </div>
        </div>
      );
}

export default Announcement;
