import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;
  width: 267px;
  height: 211px;
  p {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
  }
`;

const Description = styled.div`
  padding: 6px 0px 4px 0px;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  line-height: 18px;
  span {
    color: #888888;
  }
`;

const Overview = styled.div`
  width: 267px;
  height: 135px;
  overflow: hidden;
  img {
    border: 1px solid #ededed;
    box-sizing: border-box;
    border-radius: 3px;
    margin-top: 8px;
  }
`;

const Project = () => {
  return (
    <Wrapper>
      <p>Nền tảng chia sẻ sách cũ</p>

      <Description>
        <div>
          <span>Repo:</span> Jgithub.com/blahblah/book-share
        </div>
        <div>
          <span>Contributors:</span> Thinh Pham, Mai Ly, Nhu Quynh
        </div>
      </Description>
      <Overview>
        <img src="/img/project.png" alt="" />
      </Overview>
    </Wrapper>
  );
};

export default Project;
