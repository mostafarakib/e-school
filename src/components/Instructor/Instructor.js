import React from "react";
import { Col } from "react-bootstrap";
import "./Instructor.css";

const Instructor = (props) => {
  const { img, subject, Name } = props.instructor;
  return (
    <Col className="instructor-container mb-5">
      <img className="instructor-img mt-4" src={img} alt="instructor" />
      <div className="instructor-contents">
        <h5 className="mt-4">{Name}</h5>
        <p>{subject}</p>
      </div>
    </Col>
  );
};

export default Instructor;
