import React from "react";
import { Wrapper } from "./style";
import { default as Course } from "../Course";

const CompletedCourse = () => {
  return (
    <Wrapper>
      <p>Các khóa học đã hoàn thành</p>
      <Course />
      <Course />
      <Course />
    </Wrapper>
  );
};

export default CompletedCourse;
