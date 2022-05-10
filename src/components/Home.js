import React from 'react';
import NavContainer from './NavContainer';
import Footer from './Footer';

function Home() {
  return (
    <div className="container-fluid primary-container">
      <NavContainer />
      <main>Main content goes here. We'll add reusable components.</main>
      <Footer />
    </div>
  );
}

export default Home;
