import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Blogs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPen, faCalendarDays } from "@fortawesome/free-solid-svg-icons";

const Blogs = () => {
  return (
    <div className="mt-5" id="blogs">
      <h6 className="section-intro">Blog & News</h6>
      <h2>Trending On Our Blogs</h2>
      <Container>
        <Row xs={1} md={2} className="g-4 justify-content-center mt-4">
          <Col className="blog me-5">
            <Card className="text-start ">
              <p className="color-primary">Campaign</p>
              <h5>Fostering Future Schools & Social Innovation</h5>
              <div className="d-flex justify-content-between mt-4">
                <p>
                  <FontAwesomeIcon icon={faCalendarDays} /> 25 May, 2021
                </p>
                <p>
                  <FontAwesomeIcon icon={faUserPen} />{" "}
                  <span className="color-primary">Nerte Gronw</span>
                </p>
              </div>
              <img src="/images/blog-1.jpg" alt="blog" />
            </Card>
          </Col>
          <Col className="blog">
            <Card className="text-start ">
              <p className="color-primary">Education</p>
              <h5>Identity Design For A New Crusader Work</h5>
              <div className="d-flex justify-content-between mt-4">
                <p>
                  <FontAwesomeIcon icon={faCalendarDays} /> 20 Aug, 2021
                </p>
                <p>
                  <FontAwesomeIcon icon={faUserPen} />{" "}
                  <span className="color-primary">Hazel Thomas</span>
                </p>
              </div>
              <img src="/images/blog-2.jpg" alt="" />
            </Card>
          </Col>
        </Row>
      </Container>
      <button className="btn-regular mt-5 mb-5">View All Blogs &#8594;</button>
    </div>
  );
};

export default Blogs;
