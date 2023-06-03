import React from "react";
import { calculateSubTotal, calculateTotal } from "../../utils/utils";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartProvider";

const CartOrderSummary = () => {
  const { cartData } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const buttonClickHandler = () => {
    navigate("/checkout", {
      state: { from: location },
    });
  };
  return (
    <section className="order-summary-wrapper">
      <h2>Order Summary</h2>
      <article className="order-summary-items">
        <div className="order-summary-item">
          <strong>Subtotal</strong>
          <p>₹{calculateSubTotal(cartData)}</p>
        </div>
        <div className="order-summary-item">
          <strong>Shipping cost</strong>
          <p>{cartData.length === 0 ? "₹0" : "₹10"}</p>
        </div>
        <div className="order-summary-item">
          <strong>Discount(10%)</strong>
          <p>₹{Math.ceil(calculateSubTotal(cartData) * 0.1)}</p>
        </div>
        <div className="order-summary-item">
          <strong>TOTAL</strong>
          <p>
            ₹
            {cartData.length === 0
              ? 0
              : calculateTotal(
                  calculateSubTotal(cartData),
                  Math.ceil(calculateSubTotal(cartData) * 0.2),
                  10
                ).toFixed(2)}
          </p>
        </div>
        <div>
          <button onClick={buttonClickHandler}>proceed to checkout</button>
        </div>
      </article>
    </section>
  );
};

export default CartOrderSummary;
