import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row xs={1} md={2} xl={4} className="g-4 justify-content-center">
          <Col className="me-5">
            <h2>
              <FontAwesomeIcon icon={faGraduationCap} /> E-School
            </h2>
            <p className="mt-3">
              There are course and event custom post types so you can easily
              create and manage course, events.
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} /> +880 1850432154
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> mostafa.rakib.10@gmail.com
            </p>
          </Col>
          <Col className="ms-5">
            <h4>About</h4>
            <Link to="/about" className="footer-link mt-4">
              About Us
            </Link>
            <Link to="/about-me" className="footer-link">
              About Me
            </Link>
            <Link to="/courses" className="footer-link">
              Courses
            </Link>
            <Link className="footer-link">Events</Link>
            <Link className="footer-link">Career</Link>
            <Link to="/contact" className="footer-link">
              Contact
            </Link>
          </Col>
          <Col>
            <h4>Newsletter</h4>
            <p className="mt-4 mb-4">Get every latest news on your door!</p>
            <input type="email" placeholder=" Enter Your E-mail" />
            <button className="btn-email">&#8594;</button>
          </Col>
        </Row>
        <hr />
        <p className="text-center">
          <small>
            &copy; 2022 E-School. All rights reserved by{" "}
            <span className="color-primary">Mostafa Rakib</span>
          </small>
        </p>
      </Container>
    </div>
  );
};

export default Footer;
