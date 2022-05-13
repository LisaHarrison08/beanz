import React from 'react';
import About from './About';
import PageFooter from './PageFooter';
// import NavContainer from './NavContainer';
import Nav from './Navigation2';
import Header from './Header2'
import TextCard from './TextCard';
import ImageCard from './ImageCard';
import Footer from './Footer';
import coffeeCup from '../assets/coffee-cup.jpg';
import baristaImg from '../assets/barista.jpg';

function Home() {
  return (
    <div className="container-fluid primary-container">
      < Nav />
      < Header />
      {/* <NavContainer /> */}
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
      <About />
      <div className="row footer-row">
        <Footer />
        <PageFooter />
      </div>
    </div>
  );
}

export default Home;
