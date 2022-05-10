import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Menu from './Menu';

function Main() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/menu" element={<Menu />} />
      </Routes>
    </div>
  );
}

export default Main;
