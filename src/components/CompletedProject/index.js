import React from "react";
import styled from "styled-components";
import { default as Project } from "../Project";
import { default as Supported } from "../Supported";

const Wrapper = styled.div`
  .title {
    padding-bottom: 16px;
    font-weight: 600;
    font-size: 18px;
    line-height: 23px;
  }
`;

const Blog = styled.div`
  padding-bottom: 24px;
  div {
    padding: 10px 0px 10px 0px;
    color: #888888;
    font-size: 14px;
    line-height: 18px;
    border-bottom: 1px solid #ededed;
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.25);
  }
  p {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
  }
`;

const CompletedProject = () => {
  return (
    <Wrapper>
      <p className="title">Các project đã làm</p>
      <Project />

      <Blog>
        <p>Các bài viết blog tại CodersX</p>
        <div>Hướng dẫn setup reverse proxy với nginx</div>
        <div>Hướng dẫn gửi email định kỳ với node-cron và SendGrid API</div>
      </Blog>

      <Supported />
    </Wrapper>
  );
};

export default CompletedProject;
