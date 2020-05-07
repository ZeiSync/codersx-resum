import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  img {
    width: 267px;
    height: 53px;
  }
`;

const Review = () => {
  return (
    <Wrapper>
      <img src="./img/review.png" alt="" />
    </Wrapper>
  );
};

export default Review;
