import React, { useContext } from "react";
import "./index.css";
import { productContext } from "../../context/ProductProvider";
import CartCard from "../../components/Cards/CartCard/CartCard";

function Cart() {
  const { cart } = useContext(productContext);
  return (
    <div className="cart-container">
      <h2>My cart</h2>
      <div className="cart-wrapper">
        <ul className="cart-items-wrapper">
          {cart?.map((item) => {
            return (
              <li key={item.id}>
                <CartCard cartItem={item} />
              </li>
            );
          })}
        </ul>
        <section className="order-summary-wrapper">
          <h2>Order Summary</h2>
          <article className="order-summary-items">
            <div className="order-summary-item">
              <strong>Subtotal</strong>
              <p>999</p>
            </div>
            <div className="order-summary-item">
              <strong>Shipping cost</strong>
              <p>999</p>
            </div>
            <div className="order-summary-item">
              <strong>Discount</strong>
              <p>999</p>
            </div>
            <div className="order-summary-item">
              <strong>TOTAL</strong>
              <p>999</p>
            </div>
            <button>procced to checkout</button>
          </article>
        </section>
      </div>
    </div>
  );
}

export default Cart;
