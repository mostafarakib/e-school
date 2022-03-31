import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "./UserReview.css";

const UserReview = () => {
  return (
    <div>
      <h6 className="section-intro mt-5">Testimonial</h6>
      <h2>What Our Student Says</h2>
      <Container className="mt-4">
        <Carousel variant="dark">
          <Carousel.Item className="d-flex align-items-center flex-sm-column flex-md-row ">
            <img className="d-block me-5" src="/images/user-3.jpg" alt="user" />

            <div className="text-start">
              <h5>The Bot</h5>
              <p>
                <small>Student</small>
              </p>
              <p>
                Hey, I am The Bot and I have been working as a freelancer for
                many years now. In 2005, I graduated from a BA honours in Art &
                Design from BCU and then went onto complete a Master’s Degree in
                Teaching from UEL. The skills I gained from learning and
                teaching have led me to create Upskillwise, a place for learners
                like myself to find the best possible resources and courses to
                train and upskill themselves, either personally or
                professionally. If you have a question, please feel free to ask
                me anything or leave me a comment.
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item className="d-flex align-items-center flex-sm-column flex-md-row">
            <img className="d-block me-5" src="/images/user-3.jpg" alt="user" />

            <div className="text-start">
              <h5>The Bot</h5>
              <p>
                <small>Student</small>
              </p>
              <p>
                Hey, I am The Bot and I have been working as a freelancer for
                many years now. In 2005, I graduated from a BA honours in Art &
                Design from BCU and then went onto complete a Master’s Degree in
                Teaching from UEL. The skills I gained from learning and
                teaching have led me to create Upskillwise, a place for learners
                like myself to find the best possible resources and courses to
                train and upskill themselves, either personally or
                professionally. If you have a question, please feel free to ask
                me anything or leave me a comment.
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item className="d-flex align-items-center flex-sm-column flex-md-row">
            <img className="d-block me-5" src="/images/user-3.jpg" alt="user" />

            <div className="text-start">
              <h5>The Bot</h5>
              <p>
                <small>Student</small>
              </p>
              <p>
                Hey, I am The Bot and I have been working as a freelancer for
                many years now. In 2005, I graduated from a BA honours in Art &
                Design from BCU and then went onto complete a Master’s Degree in
                Teaching from UEL. The skills I gained from learning and
                teaching have led me to create Upskillwise, a place for learners
                like myself to find the best possible resources and courses to
                train and upskill themselves, either personally or
                professionally. If you have a question, please feel free to ask
                me anything or leave me a comment.
              </p>
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default UserReview;
