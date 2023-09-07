import React from "react";
import './ThreadList.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Hero from "./Hero";

import Thread from "./Thread";
import Announcement from "./Announcement";

function ThreadList() {
    return (
      <div className="firstCorner">
        <h1>Story Corner</h1>
        <p>Learn from others experience.</p>
        <div className="storyCorner">
                
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
                    <div className="story">
                        <h3>Title</h3>
                        <p>Content</p>
                    </div>
                    
                </div>

            </div>
      </div>
    );
  }
  
  export default ThreadList;
   