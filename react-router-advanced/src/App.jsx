// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './Profile';
import BlogPost from './BlogPost';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/blog/:postId" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
