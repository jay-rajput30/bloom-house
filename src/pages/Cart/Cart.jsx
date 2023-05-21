import React, { useContext } from "react";
import "./index.css";
import { productContext } from "../../context/ProductProvider";
import CartItemList from "./CartItemList";
import CartOrderSummary from "./CartOrderSummary";

function Cart() {
  const { cart } = useContext(productContext);
  return (
    <div className="cart-container">
      {cart?.length === 0 && <h2>oops.. not items added to cart as yet</h2>}
      {/* <h2>My cart</h2> */}
      {cart?.length > 0 && (
        <div className="cart-wrapper">
          <CartItemList />
          <CartOrderSummary />
        </div>
      )}
    </div>
  );
}

export default Cart;
