import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from '../redux/store';
import Home from './Home';
import About from './About';
import Menu from './Menu';

function Main() {
  return (
    <Provider store={Store}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/menu" element={<Menu />} />
      </Routes>
    </Provider>
  );
}

export default Main;
