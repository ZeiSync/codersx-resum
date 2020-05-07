import React from "react";
import styled from "styled-components";
import {
  Footer,
  Header,
  CompletedCourse,
  CompletedProject
} from "./components";

const App = () => {
  const Wrapper = styled.div`
    * {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
    }
    display: block;
    margin: auto;
    width: 768px;
    height: 1024px;
    padding: 30px;
    background: #f5f9fa;
    font-family: "Source Sans Pro", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
  `;

  const Main = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `;

  return (
    <Wrapper>
      <Header />
      <Main>
        <CompletedCourse />
        <div />
        <CompletedProject />
      </Main>
      <Footer />
    </Wrapper>
  );
};

export default App;
