import React from 'react';
import Navigation from './Navigation';
import About from './About';
import PageFooter from './PageFooter';
import Footer from './Footer';

function Home() {
  return (
    <div className="container-fluid primary-container">
      <Navigation />
      <main>Main content goes here. We'll add reusable components.</main>
      <About />
      <Footer />
      <PageFooter />
    </div>
  );
}

export default Home;
