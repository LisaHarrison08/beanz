import React from 'react';
import About from './About';
import Nav from './Navigation2';
import Header from './Header2';

function AboutPage() {
  return (
    <div className="container-fluid primary-container">
      <Nav />
      <Header />
      <About />
    </div>
  );
}

export default AboutPage;
