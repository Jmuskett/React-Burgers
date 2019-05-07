export const GlobalState = {
  hamburgers: 0,
  fries: 0
};

export const burgerAndFriesReducer = (state, action) => {
  switch (action.type) {
    case "hamburger":
      return { ...state, hamburgers: state.hamburgers + 1 };
    case "fries":
      return { ...state, fries: state.fries + 1 };
    default:
      return {
        state
      };
  }
};
