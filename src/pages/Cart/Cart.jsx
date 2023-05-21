import React, { useContext } from "react";
import "./index.css";
import { productContext } from "../../context/ProductProvider";
import CartItemList from "./CartItemList";
import CartOrderSummary from "./CartOrderSummary";

function Cart() {
  const { cart } = useContext(productContext);
  return (
    <div className="cart-container">
      <h2>My cart</h2>
      <div className="cart-wrapper">
        <CartItemList />
        <CartOrderSummary />
      </div>
    </div>
  );
}

export default Cart;
