import React from "react";
import styled from "styled-components";
import { Flex, FlexColumn } from "../globalStyles";
import { AiOutlineDown } from "react-icons/ai";

const Menu = styled.nav`
  background-color: #ffc400;
  padding: 5px;
  position: relative;
`;

const DropdownButton = styled(Flex)`
  font-family: "Roboto Slab";
  align-items: center;
  border: none;
  width: 100%;
  justify-content: space-between;
  background-color: transparent;
`;

const ButtonLabel = styled.h2`
  margin: 0;
  margin-right: 5px;
  font-size: 1rem;
`;

const DropdownArrow = styled(AiOutlineDown)`
  font-size: 1.25rem;
`;

const Categories = styled(FlexColumn)`
  padding-left: 10px;
  list-style: none;
  font-family: "Work Sans";
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #ffc400;
  width: 100%;
`;

const Category = styled.li`
  padding: 5px 0;
  border-top: 1px solid #3c3c3c43;
`;

const DropdownMenu = () => {
  return (
    <Menu>
      <DropdownButton as="button">
        <ButtonLabel>Product Categories</ButtonLabel> <DropdownArrow />
      </DropdownButton>
      <Categories>
        <Category>Category 1</Category>
        <Category>Category 2</Category>
        <Category>Category 3</Category>
        <Category>Category 4</Category>
        <Category>Category 5</Category>
      </Categories>
    </Menu>
  );
};

export default DropdownMenu;
