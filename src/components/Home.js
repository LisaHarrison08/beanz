import React from 'react';
import About from './About';
import Fade from 'react-reveal';
import PageFooter from './PageFooter';
// import NavContainer from './NavContainer';
import Nav from './Navigation2';
import Header from './Header2'
import TextCard from './TextCard';
import ImageCard from './ImageCard';
import Footer from './Footer';
import coffeeCup from '../assets/coffee-cup3.jpg';
import baristaImg from '../assets/barista3.jpg';
import beans from '../assets/beans.jpg';

// resized images to 400 x 300

function Home() {
  return (
    <div className="container-fluid primary-container">
      < Nav />
      < Header />
      {/* <NavContainer /> */}
      <Fade left duration={6000} distance="300px">
        <div className="row content-row">
          <TextCard title="Text Card" text="I'm a text card placeholder" />
          <ImageCard img={coffeeCup} />
        </div>
      </Fade>
      <Fade right duration={6000} distance="300px">
        <div className="row content-row">
          <ImageCard img={baristaImg} />
          <TextCard
            title="I'm another text card"
            text="Just holding down the fort"
          />
        </div>
      </Fade>
      <Fade left duration={6000} distance="300px">
        <div className="row content-row">
          <TextCard
            title="I'm another text card"
            text="Just holding down the fort"
          />
          <ImageCard img={beans} />
        </div>
      </Fade>
      <About />
      <div className="row footer-row">
        <Footer />
        <PageFooter />
      </div>
    </div>
  );
}

export default Home;
