import React from "react";
import { CardTitle } from "..";
import { Wrapper, CourseInfor, GitInfor } from "./style";

const Course = () => {
  return (
    <Wrapper>
      <CardTitle>Khoá dự bị 2020</CardTitle>
      <CourseInfor>
        <div>
          <span>Topics:</span> JavaScript, HTML, Git, UI, CSS, Bootstrap
        </div>
        <div id="wrap">
          <div>
            <span>Đầu vào:</span>25/100
          </div>
          <div />
          <div>
            <span>Đầu ra:</span> 96/100<span>(thi lại 2 lần)</span>
          </div>
        </div>
        <div>
          <span>Đã hỏi mentor:</span> 25 lần
        </div>
      </CourseInfor>
      <GitInfor>
        <img src="./img/image.png" alt="" />
      </GitInfor>
    </Wrapper>
  );
};

export default Course;
