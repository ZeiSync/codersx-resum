import React from "react";
import styled from "styled-components";
import { default as Review } from "../Review";

const Wrapper = styled.div`
  padding: 30px 0px;
  p {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    padding-bottom: 16px;
  }

  div {
    border-radius: 4px;
    padding-bottom: 4px;
  }
`;

const Supported = () => {
  return (
    <Wrapper>
      <p>Học viên đã support</p>
      <div>
        <Review />
        <Review />
        <Review />
      </div>
    </Wrapper>
  );
};

export default Supported;
