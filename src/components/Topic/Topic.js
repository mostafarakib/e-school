import React from "react";
import { Card, Col } from "react-bootstrap";
import "./Topic.css";

const Topic = (props) => {
  const { img, title, details, course } = props.topic;
  return (
    <Col className="topic-container">
      <Card>
        <div className="topic-img-container">
          <Card.Img className="topic-img" variant="top" src={img} />
        </div>
        <Card.Body>
          <h6>{course} Courses</h6>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Topic;
