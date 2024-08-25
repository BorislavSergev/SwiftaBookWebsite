import React, { useState } from 'react';
import { Nav, Navbar, Button, Offcanvas } from 'react-bootstrap';
import { BiMenu } from 'react-icons/bi'; // Import the menu icon
import './header.css';

export default function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="light" expand="lg" className="navbar">
        <Navbar.Brand href="#" className="brand">SwiftaBook</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="nav-links">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="/login">About</Nav.Link>
            <Nav.Link href="#">FAQ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
          <Button variant="dark" className="contact-button">
            Contact us
          </Button>
        <Button variant="dark" className="menu-button d-lg-none" onClick={handleShow}>
          <BiMenu />
        </Button>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="#" onClick={handleClose}>Home</Nav.Link>
            <Nav.Link href="/login" onClick={handleClose}>About</Nav.Link>
            <Nav.Link href="#" onClick={handleClose}>FAQ</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
