import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Topic from "../Topic/Topic";
import "./Topics.css";

const Topics = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetch("topics.json")
      .then((res) => res.json())
      .then((data) => setTopics(data));
  }, []);
  return (
    <div id="catagories">
      <h6 className="mt-5 section-intro">Course Catagories</h6>
      <h2>Popular Topics To Learn</h2>
      <Container className="mt-4">
        <Row xs={1} md={2} xl={4} className="g-4">
          {topics.map((topic) => (
            <Topic key={topic.id} topic={topic}></Topic>
          ))}
        </Row>
      </Container>
      <button className="btn-regular mt-4">All Catagories &#8594;</button>
    </div>
  );
};

export default Topics;
