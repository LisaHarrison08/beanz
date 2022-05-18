import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/logo2.png';

function Navigation() {
  return (
    <nav>
      <Navbar className="nav2" expand="md" fixed="top" activekey="/home">
        <Navbar.Brand href="/">
          <img src={logo} className="nav-logo" alt="logo" />
        </Navbar.Brand>
        <Nav.Link href="/" className="nav-link">
          Home
        </Nav.Link>
        <Nav.Link href="/about" className="nav-link">
          About
        </Nav.Link>
        <Nav.Link href="/menu" className="nav-link">
          Menu
        </Nav.Link>
      </Navbar>
    </nav>
  );
}

export default Navigation;
