import React, { useContext, useEffect, useState } from "react";
import "./index.css";
import { productContext } from "../../context/ProductProvider";
import CartItemList from "./CartItemList";
import CartOrderSummary from "./CartOrderSummary";
import { getUserCart } from "../../backend/controllers/cart.controller";
import { authContext } from "../../context/AuthProvider";
//TODO: 29-MAY-23 add backend part to  delete/update cart item
function Cart() {
  const { loggedInUser } = useContext(authContext);
  const { cart, dispatch } = useContext(productContext);
  const [cartToggle, setCartToggle] = useState(false);
  const fetchCart = async () => {
    try {
      const { success, data, error } = await getUserCart(loggedInUser?.user_id);
      if (success) {
        console.log("cart effect called");
        dispatch({ type: "LOAD_CART", payload: data[0].products });
      }
    } catch (e) {
      console.error({ e });
    }
  };
  useEffect(() => {
    fetchCart();
  }, [cartToggle]);

  return (
    <div className="cart-container">
      {cart?.length === 0 && <h2>oops.. not items added to cart as yet</h2>}
      {cart?.length > 0 && (
        <div className="cart-wrapper">
          <CartItemList setCartToggle={setCartToggle} />
          <CartOrderSummary />
        </div>
      )}
    </div>
  );
}

export default Cart;
