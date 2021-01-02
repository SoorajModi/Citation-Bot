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
            <NavDropdown title="Chicago" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/chicago-book">Book</NavDropdown.Item>
              <NavDropdown.Item href="/chicago-journal">Journal</NavDropdown.Item>
              <NavDropdown.Item href="/chicago-website">Website</NavDropdown.Item>
              <NavDropdown.Item href="/chicago-lecture">Lecture</NavDropdown.Item>
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
