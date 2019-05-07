import React from "react";
import styled from "@emotion/styled";
import Hamburger from "./Hamburger";
import Fries from "./Fries";

const ItemsWrapper = styled.div`
  display: flex;
  margin: 2.2rem;
`;

const Item = styled.div`
  border: 1px solid black;
  box-shadow: 3px 4px 5px -2px rgba(0, 0, 0, 0.75);
  padding: 2.2rem;
  flex: 1 1 50%;
  margin: 2.2rem;
  text-align: center;

  p {
    font-size: 40px;
    cursor: pointer;
  }
`;

const ItemTile = () => {
  return (
    <ItemsWrapper>
      <Item>
        <Hamburger />
      </Item>
      <Item>
        <Fries />
      </Item>
    </ItemsWrapper>
  );
};

export default ItemTile;
