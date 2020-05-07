import React from "react";
import { Wrapper, Fullname, Address, Avatar, Information } from "./style";

const Header = () => {
  return (
    <Wrapper>
      <Information>
        <Fullname>
          <strong>Random Guy</strong>
          <p>Javascript Developer</p>
        </Fullname>
        <Address>
          <div>
            <i className="fas fa-triangle" /> 036-864-1985
          </div>
          <div>
            <i className="fas fa-square-full" /> thinh@coders-x.com
          </div>
          <div>
            <i className="fas fa-circle" /> Hải Châu, Đà Nẵng
          </div>
        </Address>
      </Information>
      <Avatar>
        <img src="./img/avatar.png" alt="" />
      </Avatar>
    </Wrapper>
  );
};

export default Header;
