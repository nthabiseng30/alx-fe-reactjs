// App.jsx
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './Profile';
import BlogPost from './BlogPost';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

