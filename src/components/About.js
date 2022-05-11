import React from 'react';
import coffee from '../assets/coffee-cup.jpg';
import barista from '../assets/barista.jpg';
import Fade from 'react-reveal';
// import { Container, Col, Row } from 'react-bootstrap'

function About() {
  return (
    <div className="row about-row">
      <Fade left duration={1000} distance="500px">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 about-col">
          <img className="about-us" src={barista} alt="Barista" />
        </div>
      </Fade>
      <Fade right duration={1000} distance="500px">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 about-col">
          <img className="about-pic" src={coffee} alt="Coffee Cup" />
        </div>
      </Fade>
    </div>
  );
}

export default About;
