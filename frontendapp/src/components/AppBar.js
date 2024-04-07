import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">SpaceX Explorer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#rockets">Rockets</Nav.Link>
            <Nav.Link href="#crew">Crew</Nav.Link>
            <Nav.Link href="#starlink">Starlink</Nav.Link>
          </Nav> */}
          {/* Optionally you can also add form or other elements here */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
