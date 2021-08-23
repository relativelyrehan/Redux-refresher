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

const cart = window.localStorage.getItem("cartItems").split(",");

export const addToCartReducer = (state = cart, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      if (state.indexOf(action.payload === -1)) {
        window.localStorage.setItem("cartItems", [...state, action.payload]);
        return [...state, action.payload];
      } else {
        return state;
      }

    default:
      return state;
  }
};
