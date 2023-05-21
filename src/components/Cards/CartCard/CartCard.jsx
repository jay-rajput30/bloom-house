import React from "react";
import { X } from "react-feather";
import "./index.css";
const CartCard = ({ cartItem }) => {
  return (
    <article className="cart-card-wrapper">
      <X className="remove-cart-item-icon" />
      <div>
        <img src={cartItem.thumbnail} />
      </div>

      <div className="cart-card-details">
        <small>{cartItem?.category}</small>
        <h4>{cartItem?.name}</h4>

        <div className="cart-item-quantity-wrapper">
          <small id="cart-card-details-price">${cartItem?.price}</small>
          <div>
            <span>Qty: </span>
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CartCard;
