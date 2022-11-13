import React, { useState } from "react";
import styled from "styled-components";
import { Flex, FlexColumn } from "../globalStyles";
import { AiOutlineDown } from "react-icons/ai";

const Menu = styled.nav`
  background-color: #ffc400;
  /* padding: 5px; */
  position: relative;
  /* max-width: 420px; */
`;

const DropdownButton = styled(Flex)`
  font-family: "Roboto Slab";
  align-items: center;
  border: none;
  width: 100%;
  justify-content: space-between;
  background-color: transparent;
  padding: 8px 5px;
  cursor: pointer;
  @media (min-width: 500px) {
  }
`;

const ButtonLabel = styled.h2`
  margin: 0;
  margin-right: 5px;
  font-size: 1rem;
`;

const DropdownArrow = styled(AiOutlineDown)`
  font-size: 1.25rem;
`;

interface CategoriesProps {
  toggled: boolean;
}

const Categories = styled(FlexColumn)<CategoriesProps>`
  list-style: none;
  font-family: "Work Sans";
  position:${(props) => (props.toggled ? "static" : "absolute")};
  top: ${(props) => (props.toggled ? "100%" : "-440%")};
  left: 0;
  background-color: #ffc400;
  width: 100%;
  cursor: pointer;
  margin: 0;
  padding: 0;
  z-index: -1;
`;

const Category = styled.li`
  padding: 10px 0px 10px 10px;
  border-top: 1px solid #3c3c3c43;
  :hover {
    background-color: #00bbff;
  }
`;

const DropdownMenu = () => {
  const [toggled, setToggled] = useState(false);

  const handleClick = () => {
    setToggled(!toggled);
  };

  return (
    <>
    <Menu>
      <DropdownButton as="button" onClick={handleClick}>
        <ButtonLabel>Product Categories</ButtonLabel> <DropdownArrow />
      </DropdownButton>
      <Categories as="ul" toggled={toggled}>
        <Category>Category 1</Category>
        <Category>Category 2</Category>
        <Category>Category 3</Category>
        <Category>Category 4</Category>
        <Category>Category 5</Category>
      </Categories>
    </Menu>
    </>
  );
};

export default DropdownMenu;
