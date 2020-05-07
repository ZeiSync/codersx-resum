import styled from "styled-components";

export const Wrapper = styled.div`
  padding-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Information = styled.div`
  width: 50%;
`;

export const Fullname = styled.div`
  padding-bottom: 14px;
  strong {
    font-style: normal;
    font-size: 32px;
    line-height: 40px;
  }
  p {
    color: #888888;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 28px;
  }
`;

export const Address = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 16px;
  line-height: 20px;
  color: #333333;
  div {
    padding: 5px 5px 5px 0px;
    width: 45%;
  }
  i {
    margin-right: 9px;
  }

  .fa-circle {
    color: #c90000;
  }

  .fa-square-full {
    color: #fd8d25;
  }

  .fa-triangle {
    color: #45ce42;
  }
`;

export const Avatar = styled.div`
  img {
    border-radius: 50%;
    border: 5px solid #c90000;
    width: 118px;
    height: 118px;
  }
`;
