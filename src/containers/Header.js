import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { loginUser, logoutUser } from "../redux/actions/userActions";

function Header() {
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.loginState);
  const cart = useSelector((state) => state.cart);
  return (
    <nav class="bg-blue-400 p-6 mb-6 text-gray-50 font-semibold">
      <div class="container text-lg">
        <div className="flex justify-between">
          <a class="navbar-brand" href="/">
            Redux Store
          </a>
          <div>cart: {cart.length}</div>
          <div className="flex gap-x-4">
            <button
              className="hover:bg-purple-400"
              onClick={() => dispatch(loginUser())}
            >
              {loginState ? "Rehan" : "Login"}
            </button>
            {loginState && (
              <button onClick={() => dispatch(logoutUser())}>Logout</button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
