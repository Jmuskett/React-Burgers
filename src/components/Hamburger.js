import React, { useContext, useReducer } from "react";
import { ApplicationState } from "../index";
import { ResetButton } from "./ItemTile";

const Hamburger = () => {
  const { GlobalState, burgerAndFriesReducer } = useContext(ApplicationState);
  const [state, dispatch] = useReducer(burgerAndFriesReducer, GlobalState);

  return (
    <>
      <div>
        <h1 onClick={() => dispatch({ type: "hamburger" })}>{`\u{1F354}`}</h1>
        <p>Hamburger Count: {state.hamburgers}</p>
      </div>

      <div>
        <ResetButton onClick={() => dispatch({ type: "resetBurgers" })}>
          reset Hamburgers
        </ResetButton>
      </div>
    </>
  );
};

export default Hamburger;
