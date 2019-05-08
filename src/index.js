import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { globalState, burgerAndFriesReducer } from "./store";

export const ApplicationState = React.createContext();

ReactDOM.render(
  <ApplicationState.Provider value={{ globalState, burgerAndFriesReducer }}>
    <App />
  </ApplicationState.Provider>,
  document.getElementById("root")
);
