import React, { useContext, useReducer } from "react";
import { ApplicationState } from "../index";
import { ResetButton } from "../SharedStyles";

const Hamburger = () => {
  const { globalState, burgerAndFriesReducer } = useContext(ApplicationState);
  const [state, dispatch] = useReducer(burgerAndFriesReducer, globalState);

  return (
    <>
      <div>
        <h1 onClick={() => dispatch({ type: "hamburger" })}>{`\u{1F354}`}</h1>
        <p>Hamburger Count: {state.hamburgers}</p>
      </div>

      <div style={{ margin: "4rem 0" }}>
        <ResetButton onClick={() => dispatch({ type: "resetBurgers" })}>
          reset Hamburgers
        </ResetButton>
      </div>
    </>
  );
};

export default Hamburger;
