import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/logo.png';

function Navigation() {
  return (
    <>
      <Navbar className="custom-nav">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} className="nav-logo" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="nav-link" href="/menu">
                Menu
              </Nav.Link>
              <Nav.Link className="nav-link" href="/about">
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
