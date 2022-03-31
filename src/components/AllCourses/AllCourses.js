import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import AllCourse from "../AllCourse/AllCourse";
import "./AllCourses.css";

const AllCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="p-5 all_courses-container">
      <h2 className="mt-5 pt-5">
        Pick Yours & Start Developing Yourself Today!
      </h2>
      <Container className="mt-5">
        <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
          {courses.map((course) => (
            <AllCourse key={course.id} course={course}></AllCourse>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AllCourses;
