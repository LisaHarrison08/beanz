import React from 'react';
import Fade from 'react-reveal';
import { Container, Row } from 'react-bootstrap';
import coffeeBarBanner from '../assets/coffee-bar-banner.jpg';

const Header = () => {
  return (
    <header id="home">
      <Container fluid>
        <div className="overlay"></div>
        <Row>
          <img
            src={coffeeBarBanner}
            className="banner-img custom-banner"
            alt="banner"
          />
          <div className="banner-text text-center">
            <Fade bottom>
              <h1>BEANZ</h1>
            </Fade>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
