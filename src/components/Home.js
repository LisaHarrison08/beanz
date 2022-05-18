import React from 'react';
import About from './About';
import Fade from 'react-reveal';
import PageFooter from './PageFooter';
// import NavContainer from './NavContainer';
import Nav from './Navigation2';
import Header from './Header2';
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
      <Nav />
      <Header />

      <Fade left duration={6000} distance="300px">
        <div className="row content-row">
          <TextCard
            title="Convenient Locations"
            text="There are several Beanz locations throughout the city serving up a fresh brew daily."
          />
          <ImageCard img={coffeeCup} />
        </div>
      </Fade>
      <Fade right duration={6000} distance="300px">
        <div className="row content-row">
          <ImageCard img={baristaImg} />
          <TextCard
            className="card-title"
            title="Exceptional Service"
            text="Our coffee is just part of the story. We are committed to providing you with the best service in the city."
          />
        </div>
      </Fade>
      <Fade left duration={6000} distance="300px">
        <div className="row content-row">
          <TextCard
            title="The Beanz"
            text="We select the finest beanz to make the perfect brew."
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
