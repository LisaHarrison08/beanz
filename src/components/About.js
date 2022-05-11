import React from 'react';
import barista from '../assets/people2.jpg';
import Fade from 'react-reveal';
import TextCard from './TextCard';


function About() {
  return (
    <div className="row about-row">
      <Fade left duration={1000} distance="500px">
        <div className="col-sm-12 col-md-6 about-col">
          <img className="about-us" src={barista} alt="Barista" />
        </div>
      </Fade>
      <Fade right duration={1000} distance="500px">
        <div className="col-sm-12 col-md-6 about-col">
          < TextCard />
        </div>
      </Fade>
    </div>
  );
}

export default About;
