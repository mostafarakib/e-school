import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Instructor from "../Instructor/Instructor";
import "./Instructors.css";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("instructors.json")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
  return (
    <div className="instructors mt-5" id="instructors">
      <h6 className="mt-5">Team Members</h6>
      <h2>Meet Our Instructors</h2>
      <Container className="mt-4">
        <Row xs={1} md={2} xl={4} className="g-4">
          {instructors.map((instructor) => (
            <Instructor
              key={instructor.id}
              instructor={instructor}
            ></Instructor>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Instructors;
