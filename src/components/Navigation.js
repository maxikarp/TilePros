import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Navbar
        style={{ backgroundColor: "#BFCCC5" }}
        variant="light"
        expand="lg"
      >
        <Navbar.Brand href="#home">Tile Pros</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/pricing">Pricing</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
