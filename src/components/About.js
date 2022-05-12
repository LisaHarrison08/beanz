import React from "react"
import barista from '../assets/people2.jpg';
import Fade from 'react-reveal';
import { Col, Row } from "react-bootstrap"

const About = () => {
  return (
    <div className="about-section">
      <Fade left duration={1000} distance="500px">
        <Row>
          <Col xs={12} md={6}>
            <img
              className="about-image"
              src={barista}
              alt="Beanz Barista's"
            />
          </Col>
          <Col xs={12} md={6}>
            <h2>Our Story</h2>
            <p>Our love of coffee started in kitchen roasting on a small roaster in our apartment in NYC and when we travelled far and wide our first stop was always the local coffee shop seekeing a well-crafted brew. How could anyone resist the rich aromas and opportunities to sample local offerings!? </p>
            <p>Obsessed with finding the perfect beanz and honing our roasting skills we set to work to create a perfect blend and soon after opened our first retail location, Beanz!</p>
            <p>Beanz offers a unique coffee house environment, drop in to enjoy our spacious seating area, or spacious work area and sample our delicious varieties of coffee, from classic coffee to our selection of house made speciality beverages.</p>
          </Col>
        </Row>
      </Fade>
    </div>
  )
}

export default About;