import React, { useContext, useReducer } from "react";
import { ApplicationState } from "../index";

const Hamburger = () => {
  const { GlobalState, burgerAndFriesReducer } = useContext(ApplicationState);
  const [state, dispatch] = useReducer(burgerAndFriesReducer, GlobalState);

  return (
    <div>
      <h1 onClick={() => dispatch({ type: "hamburger" })}>{`\u{1F354}`}</h1>
      <p>Hamburger Count: {state.hamburgers}</p>
    </div>
  );
};

export default Hamburger;
