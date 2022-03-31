import React from "react";
import "./HeaderContent.css";
// import "../../images/image-1.jpg";
// import "../../images/image-2.jpg";

const HeaderContent = () => {
  return (
    <div className="header-content">
      <div className="header-slogan">
        <h1>
          <span>Discover</span> <br />
          A New Way Of <br />
          Learning!
        </h1>
        <h5 className="mt-4">Be an achiever with good education</h5>
        <button className="btn-regular mt-4">Get Started Today! &#8594;</button>
      </div>
      <div className="header-img-container">
        <div className="header-img-container--1">
          <div
            style={{
              overflow: "hidden",
            }}
          >
            <img
              className="header-img--1"
              src="/images/image-1.jpg"
              alt="firstImage"
            />
          </div>
          <h6>UI Design</h6>
          <h5 className="mt-2">Learn How To Design Website</h5>
          <p>
            Understand the key concepts of visual design, understand CSS & learn
            the foundation of UX.
          </p>
        </div>
        <div className="header-img-container--2">
          <div
            style={{
              overflow: "hidden",
            }}
          >
            <img
              className="header-img--2"
              src="/images/image-2.jpg"
              alt="secondImage"
            />
          </div>
          <h6>Workshop</h6>
          <h5 className="mt-2">Design Workshop</h5>
          <p>
            Part artistry & part science, web design taps into both the creative
            & analytical side of a person's mind.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderContent;
