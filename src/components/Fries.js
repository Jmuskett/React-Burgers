import React, { useContext, useReducer } from "react";
import { ApplicationState } from "../index";
import { ResetButton } from "../SharedStyles";

const Fries = () => {
  const { GlobalState, burgerAndFriesReducer } = useContext(ApplicationState);
  const [state, dispatch] = useReducer(burgerAndFriesReducer, GlobalState);

  return (
    <>
      <div>
        <h1 onClick={() => dispatch({ type: "fries" })}>{`\u{1F35F}`}</h1>
        <p>Fries Count: {state.fries} </p>
      </div>

      <div style={{ margin: "4rem 0" }}>
        <ResetButton onClick={() => dispatch({ type: "resetFries" })}>
          Reset Fries
        </ResetButton>
      </div>
    </>
  );
};

export default Fries;
