import React from 'react';
import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='chat' element={<Chat />} />
        <Route path='/' element={<Join />} />
      </Routes>
    </Router>
  );
};

export default App;
