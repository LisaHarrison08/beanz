import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import coffeeCup from '../assets/coffee-cup.jpg';

function Navigation() {
  return (
    <>
      <Navbar className="custom-nav">
        <Container>
          <Navbar.Brand href="/">
            <img src={coffeeCup} className="nav-logo" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
