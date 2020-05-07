import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
`;

const CardTitle = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default CardTitle;
