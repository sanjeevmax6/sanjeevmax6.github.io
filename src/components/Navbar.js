import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { FaHome } from "react-icons/fa";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="#home" className="d-flex">
          <FaHome className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link href="#home" onClick={() => updateExpanded(false)}>
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#work" onClick={() => updateExpanded(false)}>
                Work
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#experience" onClick={() => updateExpanded(false)}>
                Experience
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#skills" onClick={() => updateExpanded(false)}>
                Skills
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#contact" onClick={() => updateExpanded(false)}>
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
