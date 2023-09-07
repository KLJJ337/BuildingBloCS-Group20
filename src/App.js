import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Hero from "./Hero";
import ThreadList from "./ThreadList";
import Thread from "./Thread";
import Announcement from "./Announcement";

function App() {
  return (
    <Router>
      <Header />

      <Hero />
      <Announcement />
      

      <Routes>
        {/* <Route path="/" exact component={ForumList} /> */}
        <Route path="/forum/:forumId" exact component={ThreadList} />
        <Route path="/thread/:threadId" exact component={Thread} />
      </Routes>
    </Router>
  );
}

export default App;
