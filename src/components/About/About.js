import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-vision">
        <h6 className="color-primary">Our Vision</h6>
        <h2>
          We envision a world where anyone,
          <br /> anywhere has the power to transform their life through
          learning.
        </h2>
        <Button className="btn-regular mt-4">Hear From Our Community</Button>
      </div>

      <div className="about-intro p-5 m-5">
        <h2>A personalized learning resource for all ages</h2>
        <p className="mx-auto mt-4">
          E-School offers practice exercises, instructional videos, and a
          personalized learning dashboard that empower learners to study at
          their own pace in and outside of the classroom. We tackle math,
          science, computing, history, art history, economics, and more,
          including K-14 and test preparation (SAT, Praxis, LSAT) content. We
          focus on skill mastery to help learners establish strong foundations,
          so there's no limit to what they can learn next!
        </p>
      </div>
      <div className="about-community">
        <h5>
          Join our global community of progress makers and start learning today!
        </h5>
        <button className="btn-secondary mt-4">Join Now!</button>
      </div>
      <Container className="about-story p-5" fluid>
        <Row xs={1} md={2} className="g-4">
          <Col className="story_img-container">
            <img className="story_img-1" src="/images/blog-1.jpg" alt="story" />
            <img className="story_img-2" src="/images/blog-2.jpg" alt="story" />
          </Col>
          <Col className="about_story-content align-self-center">
            <h2>Our Story</h2>
            <p className="w-75 mx-auto mt-4">
              E-School students are a community of global learners united in a
              shared goal of uplift and transformation. Our unique learning
              model enables an unprecedented degree of engagement with our
              students, and we are with them through every step of their
              learning journey—from the first moment a marketing team member
              might answer a question on Facebook, to the penultimate moment
              when a career team member receives word that a graduate has gotten
              a new job. Our mantra is Students First, and this is the light
              that guides us as we continue our mission to bring the highest
              quality learning possible, to as many students as we can possibly
              reach.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
