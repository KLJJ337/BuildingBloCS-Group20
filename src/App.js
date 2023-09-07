import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Hero from "./Hero";
import ThreadList from "./ThreadList";
import Thread from "./Thread";
import Announcement from "./Announcement";
import ThreadDetail from "./ThreadDetail";


function App() {
  return (
    <Router>
      <Header />
      {
      //<Hero />
      //<Announcement />
      
        }
      <Routes>
        <Route path="/"  element={<><Hero /><Announcement /></>}/> 
        <Route path="/story" element={<ThreadList />} />
        <Route path="/qna" element={<Thread />} />
        <Route path="/ThreadDetail" element={<ThreadDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
