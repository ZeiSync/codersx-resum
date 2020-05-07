import React from "react";
import { Wrapper, FooterLeft, FooterCenter, FooterRight } from "./style";

const Footer = () => {
  return (
    <Wrapper>
      <FooterLeft>
        <img src="./img/codersxlogo.png" alt="" width="24px" />
        <p>
          Xác nhận bởi{" "}
          <strong>
            coders<span>X</span>
          </strong>
        </p>
      </FooterLeft>

      <FooterCenter>
        <img src="./img/qrcode.png" alt="" />
      </FooterCenter>

      <FooterRight>
        <img src="./img/codersxsendgrid.png" alt="" />
      </FooterRight>
    </Wrapper>
  );
};

export default Footer;
