const INITIAL_NAV_STATE = {
  showSideNav: false,
};

const navReducer = (state = INITIAL_NAV_STATE, action) => {
  switch (action.type) {
    case "SHOW_SIDENAV":
      return {
        ...state,
        showSideNav: action.payload,
      };
    default:
      return state;
  }
};

export default navReducer;
