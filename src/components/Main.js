import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';

function Main() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default Main;
