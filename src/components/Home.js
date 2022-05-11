import React from 'react';


import About from './About';
import PageFooter from './PageFooter';

import NavContainer from './NavContainer';
import TextCard from './TextCard';
import ImageCard from './ImageCard';

import Footer from './Footer';
import coffeeCup from '../assets/coffee-cup.jpg';
import baristaImg from '../assets/barista.jpg';

function Home() {
  return (
    <div className="container-fluid primary-container">
      <Navigation />
      <main>Main content goes here. We'll add reusable components.</main>
     

      <div className="row nav-banner-row">
        <NavContainer />
      </div>
      <div className="row content-row">
        <TextCard title="Text Card" text="I'm a text card placeholder" />
        <ImageCard img={coffeeCup} />
      </div>
      <div className="row content-row">
        <ImageCard img={baristaImg} />
        <TextCard
          title="I'm another text card"
          text="Just holding down the fort"
        />
      </div>
      <div className="row footer-row">
         <About />
      <Footer />
      <PageFooter />
        <Footer />
      </div>

    </div>
  );
}

export default Home;
