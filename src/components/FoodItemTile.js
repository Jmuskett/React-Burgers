import React from "react";
import Hamburger from "./Hamburger";
import Fries from "./Fries";

import { FoodItemsWrapper, FoodItem } from "../SharedStyles";

const FoodItemTile = () => {
  return (
    <FoodItemsWrapper>
      <FoodItem>
        <Hamburger />
      </FoodItem>
      <FoodItem>
        <Fries />
      </FoodItem>
    </FoodItemsWrapper>
  );
};

export default FoodItemTile;
