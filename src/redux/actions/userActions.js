import { ActionTypes } from "../contants/action.types";

export const loginUser = () => {
  return {
    type: ActionTypes.SIGN_IN,
  };
};

export const logoutUser = () => {
  return {
    type: ActionTypes.SIGN_OUT,
  };
};
