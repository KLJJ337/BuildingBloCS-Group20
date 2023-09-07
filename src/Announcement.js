import React from 'react';
import { Link } from 'react-router-dom';
import './Announcement.css';

function Announcement() {
    return (
        <div className="second">
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
            <div className="storyCorner">
                <h2>Story Corner</h2>
                <div className="storyThreads">
                    <div className="story">
                        <h3>Title</h3>
                        <p>Content</p>
                    </div>
                    <div className="story">
                        <h3>Title</h3>
                        <p>Content</p>
                    </div>
                    <div className="story">
                        <h3>Title</h3>
                        <p>Content</p>
                    </div>
                </div>

            </div>
        </div>
      );
}

export default Announcement;
