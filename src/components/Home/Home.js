import React from "react";
import Blogs from "../Blogs/Blogs";
import Courses from "../Courses/Courses";
import Header from "../Header/Header";
import Instructors from "../Instructors/Instructors";
import Topics from "../Topics/Topics";
import UserReview from "../UserReview/UserReview";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Topics></Topics>
      <Courses></Courses>
      <UserReview></UserReview>
      <Instructors></Instructors>
      <Blogs></Blogs>
    </div>
  );
};

export default Home;
