import React from "react";
import styled from "styled-components";
import { RiShoppingCartLine } from "react-icons/ri";
import { FlexColumn, Flex } from "../globalStyles";

const HeaderDiv = styled(FlexColumn)`
  height: max-content;
  font-family: "Work Sans";
  justify-content: space-between;
`;

const HeaderContainer = styled(FlexColumn)`
  width: 100%;
  background-color: #00bbff;
  padding: 10px;
  @media (min-width: 420px) {
    align-items: center;
  }
`;

const CompanyName = styled.h1`
  margin: 0;
  font-weight: 500;
  letter-spacing: -2px;
  word-spacing: -5px;
  background-color: #eeeeee;
  border-radius: 15px;
  padding: 3px 15px;
  box-shadow: 1px 1px 5px #0000004b;
  cursor: pointer;
  width: 100%;
  font-size: clamp(1.47rem, 7vw, 2rem);
  text-align: center;
`;

const LightFont = styled.span`
  font-weight: 200;
`;

const FlexContainer = styled(FlexColumn)`
  align-items: center;
  justify-content: space-between;
  max-width: 420px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const CartIcon = styled(RiShoppingCartLine)`
  font-size: 3.5rem;
  background-color: #eeeeee;
  box-shadow: 1px 1px 5px #0000004b;
  border-radius: 20px;
  padding: 10px;
  cursor: pointer;
`;

const Paragraph = styled.p`
  margin: 0px 0px 0px 15px;
  font-weight: 500;
`;

const InfoContainer = styled(FlexColumn)`
  margin-top: 10px;
  font-size: 0.8rem;
  width: 100%;
  /* text-align: start; */
  @media (min-width: 420px) {
    flex-direction: row;
  }
`;

const SearchBar = styled.input`
  background-color: #eeeeee;
  border-radius: 20px 0 0 20px;
  border: none;
  font-size: 1rem;
  box-shadow: 1px 1px 5px #0000004b;
  padding-left: 10px;
  width: 100%;
`;

const SearchButton = styled.button`
  font-size: 1.25rem;
  width: 100%;
  border-radius: 0 10px 10px 0;
  border: none;
  box-shadow: 1px 1px 5px #0000004b;
  background-color: #ffc400;
`;

const SearchContainer = styled(Flex)`
  margin-top: 5px;
  width: 100%;
`;

const Header = () => {
  return (
    <HeaderDiv as="header">
      <HeaderContainer>
        <FlexContainer>
          <CompanyName>
            Restaurant <LightFont>Warehouse Supply</LightFont>
          </CompanyName>
          <SearchContainer>
            <SearchBar placeholder="Enter a product" type="text" />
            <SearchButton>Search</SearchButton>
          </SearchContainer>
          <InfoContainer>
            <Paragraph>Call: (732)-555-5555</Paragraph>
            <Paragraph>Location: 123 Parker Ave, New York, NY</Paragraph>
          </InfoContainer>
        </FlexContainer>
      </HeaderContainer>
    </HeaderDiv>
  );
};

export default Header;
