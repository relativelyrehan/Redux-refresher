import { combineReducers } from "redux";
import {
  productReducer,
  selectedProductReducer,
  addToCart,
} from "./productReducer";
import { loginReducer } from "./userReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  selectedProduct: selectedProductReducer,
  cart: addToCart,
  loginState: loginReducer,
});

export default reducers;
