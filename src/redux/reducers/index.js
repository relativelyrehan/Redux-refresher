import { combineReducers } from "redux";
import {
  productReducer,
  selectedProductReducer,
  addToCartReducer,
} from "./productReducer";
import { loginReducer } from "./userReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  selectedProduct: selectedProductReducer,
  loginState: loginReducer,
  cart: addToCartReducer,
});

export default reducers;
