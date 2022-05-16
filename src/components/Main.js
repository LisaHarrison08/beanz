import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from '../redux/store';
import Home from './Home';
import AboutPage from './AboutPage';
import MenuPage from './MenuPage';

function Main() {
  return (
    <Provider store={Store}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/menu" element={<MenuPage />} />
      </Routes>
    </Provider>
  );
}

export default Main;
