import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <section className="about-me pt-5">
      <div className="about-me--title">
        <span>Mostafa Rakib</span>
        <span>
          Web Designer and
          <a target="_blanck" href="https://www.linkedin.com/in/mostafa-rakib/">
            Web Developer
          </a>
          <h1>
            <br />
            Hello, I'm Mostafa Rakib. I am proficient in HTML5, CSS3, Bootstrap,
            Tailwind CSS, JavaScript, React and Python
          </h1>
          <p className="m-4">Social Links</p>
          <a href="https://www.facebook.com/m0stafa.rakib/" target="_blanck">
            Facebook
          </a>
          <br />
          <a
            className="mt-3"
            href="https://www.linkedin.com/in/mostafa-rakib/"
            target="_blanck"
          >
            LinkedIn
          </a>
          <br />
          <a
            className="mt-3"
            href="https://github.com/mostafarakib"
            target="_blanck"
          >
            Github
          </a>
        </span>
      </div>
    </section>
  );
};

export default AboutMe;
