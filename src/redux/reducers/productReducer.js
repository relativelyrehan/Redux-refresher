import { ActionTypes } from "../contants/action.types";

const initialState = {
  products: [{ id: 1, title: "Tripling", category: "TV" }],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.SELECTED_PRODUCTS:
      return { ...state, ...action.payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCTS:
      return {};
    default:
      return state;
  }
};

export const addToCart = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      state.push(action.payload);
      window.localStorage.setItem("cartItems", JSON.stringify(state));
      return state;

    default:
      return state;
  }
};
