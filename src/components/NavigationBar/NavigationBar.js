import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faUser } from "@fortawesome/free-solid-svg-icons";
import "./NavigationBar.css";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  return (
    <Navbar bg={scroll ? "light" : "none"} expand="md" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <FontAwesomeIcon icon={faGraduationCap} /> E-School
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <NavDropdown
              title="Courses"
              id="basic-nav-dropdown"
              renderMenuOnMount={true}
            >
              <NavDropdown.Item href="#courses">
                Web Development
              </NavDropdown.Item>
              <NavDropdown.Item href="#courses">
                Graphic Design
              </NavDropdown.Item>
              <NavDropdown.Item href="#courses">
                Blockchain Development
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/courses">
                All Courses
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Catagories"
              id="basic-nav-dropdown"
              renderMenuOnMount={true}
            >
              <NavDropdown.Item href="#catagories">
                Business Analysis
              </NavDropdown.Item>
              <NavDropdown.Item href="#catagories">
                Data Science
              </NavDropdown.Item>
              <NavDropdown.Item href="#catagories">
                Content Writing
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/courses">
                All Catagories
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Pages"
              id="basic-nav-dropdown"
              renderMenuOnMount={true}
            >
              <NavDropdown.Item href="#instructors">
                Instructors
              </NavDropdown.Item>
              <NavDropdown.Item href="#blogs">Events</NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/about">
                About Us
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about-me">
                About Me
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              <FontAwesomeIcon icon={faUser} /> Log In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
