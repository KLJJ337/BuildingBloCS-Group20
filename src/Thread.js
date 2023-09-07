import React from "react";
import './Thread.css';
import { Link } from 'react-router-dom';

function ThreadList() {
    return (
      <div className="firstCorner">
        <h1>Story Corner</h1>
        <p>Learn from others experience.</p>
        <div className="storyCorner">
                
                <div className="storyThreads">
                <Link to="/ThreadDetail">
                    <div className="story">
                        <h3>Title</h3>
                        
                    </div>
                    </Link>
                    <Link to="/ThreadDetail">
                    <div className="story">
                        <h3>Title</h3>
                        
                    </div>
                    </Link>
                    <Link to="/ThreadDetail">
                    <div className="story">
                        <h3>Title</h3>
                        
                    </div>
                    </Link>
                    <Link to="/ThreadDetail">
                    <div className="story">
                        <h3>Title</h3>
                        
                    </div>
                    </Link>
                    <Link to="/ThreadDetail">
                    <div className="story">
                        <h3>Title</h3>
                        
                    </div>
                    </Link>
                    <Link to="/ThreadDetail">
                    <div className="story">
                        <h3>Title</h3>
                        
                    </div>
                    </Link>
                    <Link to="/ThreadDetail">
                    <div className="story">
                        <h3>Title</h3>
                        
                    </div>
                    </Link>
                    <Link to="/ThreadDetail">
                    <div className="story">
                        <h3>Title</h3>
                        
                    </div>
                    </Link>
                    <Link to="/ThreadDetail">
                    <div className="story">
                        <h3>Title</h3>
                        
                    </div>
                    </Link>
                    <Link to="/ThreadDetail">
                    <div className="story">
                        <h3>Title</h3>
                        
                    </div>
                    </Link>
                    
                </div>

            </div>
      </div>
    );
  }
  
  export default ThreadList;