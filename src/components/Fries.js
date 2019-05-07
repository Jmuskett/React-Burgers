import React, { useContext, useReducer } from "react";
import { ApplicationState } from "../index";

const Fries = () => {
  const { GlobalState, burgerAndFriesReducer } = useContext(ApplicationState);
  const [state, dispatch] = useReducer(burgerAndFriesReducer, GlobalState);

  return (
    <div>
      <p onClick={() => dispatch({ type: "fries" })}>{`\u{1F35F}`}</p>
      <p>Fries Count: {state.fries} </p>
    </div>
  );
};

export default Fries;
