import React, { useContext, useEffect } from "react";
import "./index.css";
import { productContext } from "../../context/ProductProvider";
import CartItemList from "./CartItemList";
import CartOrderSummary from "./CartOrderSummary";
import { getUserCart } from "../../backend/controllers/cart.controller";
import { authContext } from "../../context/AuthProvider";
//TODO: 26-MAY-23 add backend part to add/delete/update cart item
function Cart() {
  const { loggedInUser } = useContext(authContext);
  const { cart } = useContext(productContext);
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const { success, data, error } = await getUserCart(
          loggedInUser?.user_id
        );
      } catch (e) {
        console.error({ e });
      }
    };
    fetchCart();
  }, []);
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
