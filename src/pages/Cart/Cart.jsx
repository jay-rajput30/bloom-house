import React, { useContext, useEffect } from "react";
import "./index.css";
import { productContext } from "../../context/ProductProvider";
import CartItemList from "./CartItemList";
import CartOrderSummary from "./CartOrderSummary";
import { getUserCart } from "../../backend/controllers/cart.controller";
import { authContext } from "../../context/AuthProvider";
import { useCart } from "../../context/CartProvider";

function Cart() {
  const { loggedInUser, cartToggle } = useContext(authContext);
  const { cartData } = useCart();

  const fetchCart = async () => {
    try {
      const { success } = await getUserCart(loggedInUser?.user_id);
      if (success) {
      }
    } catch (e) {
      console.error({ e });
    }
  };
  useEffect(() => {
    if (loggedInUser.user_id) {
      fetchCart();
    }
  }, [cartToggle]);

  return (
    <div className="cart-container">
      {cartData?.length === 0 && <h2>oops.. not items added to cart as yet</h2>}
      {cartData?.length > 0 && (
        <div className="cart-wrapper">
          <CartItemList />
          <CartOrderSummary />
        </div>
      )}
    </div>
  );
}

export default Cart;
