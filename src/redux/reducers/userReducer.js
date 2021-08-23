import { ActionTypes } from "../contants/action.types";

const isLoggedIn =
  window.localStorage.getItem("isLoggedIn") === "true" ? true : false;

export const loginReducer = (state = isLoggedIn, action) => {
  switch (action.type) {
    case ActionTypes.SIGN_IN:
      window.localStorage.setItem("isLoggedIn", "true");
      return true;
    case ActionTypes.SIGN_OUT:
      window.localStorage.setItem("isLoggedIn", "false");
      return false;
    default:
      return state;
  }
};
