import React, { useContext, useEffect, useState } from "react";
import "./index.css";
import { productContext } from "../../context/ProductProvider";
import CartItemList from "./CartItemList";
import CartOrderSummary from "./CartOrderSummary";
import { getUserCart } from "../../backend/controllers/cart.controller";
import { authContext } from "../../context/AuthProvider";
import { useCart } from "../../context/CartProvider";
import Loading from "../../utils/Loading/Loading";

function Cart() {
  const { loggedInUser, cartToggle } = useContext(authContext);
  const { cartData } = useCart();
  const [loading, setLoading] = useState(false);
  const fetchCart = async () => {
    try {
      setLoading(true);
      const { success } = await getUserCart(loggedInUser?.user_id);
      if (success) {
        setLoading(false);
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

  if (loading) return <Loading />;
  return (
    <div className="cart-container">
      {cartData?.length === 0 && <h2>oops.. no items added to cart as yet</h2>}
      {cartData?.length > 0 && (
        <div className="cart-wrapper">
          <CartItemList />
          <CartOrderSummary selectedAdress="" />
        </div>
      )}
    </div>
  );
}

export default Cart;
