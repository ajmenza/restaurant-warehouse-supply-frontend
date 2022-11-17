import React, { useState } from "react";
import styled from "styled-components";
import { Flex, FlexColumn } from "../globalStyles";
import { AiOutlineDown } from "react-icons/ai";
import Link from "next/link";
import DropdownLink from "./DropdownLink";

const Menu = styled.nav`
  background-color: #ffc400;
  position: relative;
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
  categoriesToggled: boolean;
}

const Categories = styled(FlexColumn)<CategoriesProps>`
  list-style: none;
  font-family: "Work Sans";
  position: ${(props) => (props.categoriesToggled ? "static" : "absolute")};
  top: ${(props) => (props.categoriesToggled ? "100%" : "-440%")};
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
  const [categoriesToggled, setCategoriesToggled] = useState(false);

  const handleProductCategories = () => {
    setCategoriesToggled(!categoriesToggled);
  };

  return (
    <>
      <Menu>
        <DropdownButton as="button" onClick={handleProductCategories}>
          <ButtonLabel>Product Categories</ButtonLabel> <DropdownArrow />
        </DropdownButton>
        <Categories as="ul" categoriesToggled={categoriesToggled}>
          <DropdownLink link="cooking-equipment" category="Cooking Equipment" />
          <DropdownLink
            link="refrigeration"
            category="Commercial Refrigeration"
          />
          <DropdownLink link="furniture" category="Furniture" />
          <DropdownLink
            link="kitchen-exhaust"
            category="Kitchen Exhaust & Ventilation"
          />
          <DropdownLink link="" category="All Products" />
        </Categories>
      </Menu>
    </>
  );
};

export default DropdownMenu;
