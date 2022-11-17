import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Category = styled.li`
  padding: 10px 0px 10px 10px;
  border-top: 1px solid #3c3c3c43;
  :hover {
    background-color: #00bbff;
  }
`;

interface Props {
  category: string;
  link: string;
}

const DropdownLink = ({ category, link }: Props) => {
  return (
    <Link href={`/product-page/${link}`}>
      <Category>{category}</Category>
    </Link>
  );
};

export default DropdownLink;
