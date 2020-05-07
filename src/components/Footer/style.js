import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const FooterLeft = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 24px;
    height: 24px;
  }

  p {
    margin-left: 8px;
    color: #888888;
  }
  strong {
    color: black;
  }
  span {
    color: #c90000;
  }
`;
export const FooterCenter = styled.div`
  img {
    width: 56px;
    height: 56px;
  }
`;
export const FooterRight = styled.div`
  img {
    width: 111px;
    height: 32px;
  }
`;
