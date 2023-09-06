import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import ForumList from './Forum';
import ThreadList from './ThreadList';
import Thread from './Thread';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact component={ForumList} />
        <Route path="/forum/:forumId" exact component={ThreadList} />
        <Route path="/thread/:threadId" exact component={Thread} />
      </Routes>
    </Router>
  );
}

export default App;