import React from "react";
import { Card, Col } from "react-bootstrap";
import "./Course.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faUserPen,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";

const Course = (props) => {
  const { title, img, duration, author, price, students, star } = props.course;
  return (
    <Col className="course-container">
      <Card>
        <div className="course-img-container">
          <Card.Img className="course-img" variant="top" src={img} />
          <h6 className="duration">{duration} Hours</h6>
        </div>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <div className="d-flex justify-content-between mt-3">
            <p>
              <FontAwesomeIcon icon={faUserPen} /> {author}
            </p>
            <p>
              <span className="rating">
                <FontAwesomeIcon icon={faStar} />
              </span>{" "}
              ({star})
            </p>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <p>
              <FontAwesomeIcon icon={faPeopleGroup} /> {students} Students
            </p>
            <h5 className="price">${price}</h5>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Course;
