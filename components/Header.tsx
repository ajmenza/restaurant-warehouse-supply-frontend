import React from "react";
import styled from "styled-components";

const Wrapper = styled.header`
  display: flex;
  background-color: #00bbff;
  height: 120px;
  padding: 10px;
`;

const CompanyName = styled.h1`
  margin: 0;
  font-family: 'Work Sans';
  font-weight: 600;
  letter-spacing: -2px;
  word-spacing: -5px;
  background-color: pink;
  height: min-content;
  border-radius: 30px;
  padding: 5px 15px;
  box-shadow: 1px 1px 5px #00000069;
`;

const Header = () => {
  return (
    <Wrapper>
      <CompanyName>Restaurant Warehouse Supply</CompanyName>
    </Wrapper>
  );
};

export default Header;
