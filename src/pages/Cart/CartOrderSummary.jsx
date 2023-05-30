import React, { useContext } from "react";
import { productContext } from "../../context/ProductProvider";
import { calculateSubTotal, calculateTotal } from "../../utils/utils";

const CartOrderSummary = () => {
  const { cart } = useContext(productContext);
  return (
    <section className="order-summary-wrapper">
      <h2>Order Summary</h2>
      <article className="order-summary-items">
        <div className="order-summary-item">
          <strong>Subtotal</strong>
          <p>${Math.ceil(calculateSubTotal(cart))}</p>
        </div>
        <div className="order-summary-item">
          <strong>Shipping cost</strong>
          <p>{cart.length === 0 ? "$0" : "$10"}</p>
        </div>
        <div className="order-summary-item">
          <strong>Discount(20%)</strong>
          <p>${Math.ceil(calculateSubTotal(cart) * 0.2)}</p>
        </div>
        <div className="order-summary-item">
          <strong>TOTAL</strong>
          <p>
            $
            {cart.length === 0
              ? "0"
              : calculateTotal(
                  calculateSubTotal(cart),
                  Math.ceil(calculateSubTotal(cart) * 0.2),
                  10
                )}
          </p>
        </div>
        <div>
          <button>procced to checkout</button>
        </div>
      </article>
    </section>
  );
};

export default CartOrderSummary;
