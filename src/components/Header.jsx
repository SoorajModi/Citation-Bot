import React from 'react';
import '../css/header.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

function Header() {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" variant="dark" className="header_color">
        <Navbar.Brand href="/">Citation Manager</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Chicago" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/chicago-style-book">Book</NavDropdown.Item>
              <NavDropdown.Item href="/chicago-style-journal">Journal</NavDropdown.Item>
              <NavDropdown.Item href="/chicago-style-website">Website</NavDropdown.Item>
              <NavDropdown.Item href="/chicago-style-lecture">Lecture</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/resources">Resources</Nav.Link>
            <Nav.Link href="/">Sign In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
