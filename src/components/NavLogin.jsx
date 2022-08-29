import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";

// images
import siteIcon from "../images/site-icon-dark.png";

export default function NavLogin() {
  return (
    <>
      <Navbar variant="light" bg="warning" expand="lg" fixed="top">
        <Container className="my-2">
          <Navbar.Brand className="navbar-brand d-flex align-items-center justify-content-between">
            <img src={siteIcon} alt="site icon" />
            <span id="brand-name" className="mx-3">
              ULTRA Foundation
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse>
            <Nav className="ms-auto my-2 my-lg-o">
              <Nav.Link href="#dashboard">Dashboard</Nav.Link>
              <Nav.Link href="#badges">My Badges</Nav.Link>
              <NavDropdown title="{username}">
                {/* Should go to login page when clicked */}
                <NavDropdown.Item href="#">Account Settings</NavDropdown.Item>
                <NavDropdown.Item href="#">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
