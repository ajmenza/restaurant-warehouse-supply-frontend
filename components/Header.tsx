import React from "react";
import styled from "styled-components";
import { RiShoppingCartLine } from "react-icons/ri";
import { FlexColumn, Flex } from "../globalStyles";

const HeaderDiv = styled(FlexColumn)`
  background-color: #00bbff;
  height: 120px;
  padding: 10px;
`;

const CompanyName = styled.h1`
  margin: 0;
  font-family: "Work Sans";
  font-weight: 500;
  letter-spacing: -2px;
  word-spacing: -5px;
  background-color: #eeeeee;
  height: min-content;
  border-radius: 15px;
  padding: 5px 15px;
  box-shadow: 1px 1px 5px #0000004b;
`;

const LightFont = styled.span`
  font-weight: 200;
`;

const FlexContainer = styled(Flex)`
  align-items: center;
  justify-content: space-between;
`;

const CartIcon = styled(RiShoppingCartLine)`
  font-size: 3.5rem;
  background-color: #eeeeee;
  box-shadow: 1px 1px 5px #0000004b;
  border-radius: 20px;
  padding: 10px;
`

const Header = () => {
  return (
    <HeaderDiv as="header">
      <FlexContainer>
        <CompanyName>
          Restaurant <LightFont>Warehouse Supply</LightFont>
        </CompanyName>
        <CartIcon />
      </FlexContainer>
    </HeaderDiv>
  );
};

export default Header;
