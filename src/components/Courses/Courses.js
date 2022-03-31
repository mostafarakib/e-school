import React, { useEffect, useState } from "react";
import "./Courses.css";
import Course from "../Course/Course";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  const sixCourses = courses.slice(0, 6);
  return (
    <div className="popular_courses-container" id="courses">
      <h6 className="section-intro mt-5 pt-4">Popular Courses</h6>
      <h2>Featured On This Month</h2>
      <Container className="mt-4">
        <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
          {sixCourses.map((course) => (
            <Course key={course.id} course={course}></Course>
          ))}
        </Row>
      </Container>
      <Link to="/courses">
        <button className="btn-regular mt-4 mb-4">All Courses &#8594;</button>
      </Link>
    </div>
  );
};

export default Courses;
