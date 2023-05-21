import React, { useContext } from "react";
import { X } from "react-feather";
import "./index.css";
import { productContext } from "../../../context/ProductProvider";
const CartCard = ({ cartItem }) => {
  const { dispatch } = useContext(productContext);
  const removeCartButtonClickHandler = (item) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  };
  const cartQuantityChangeHandler = (e) => {
    dispatch({
      type: "UPDATE_CART",
      payload: { item: cartItem, quantity: +e.target.value },
    });
    console.log({ value: e.target.value, cartItem });
  };
  return (
    <article className="cart-card-wrapper">
      <X
        className="remove-cart-item-icon"
        onClick={() => removeCartButtonClickHandler(cartItem)}
      />
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
            <select onChange={cartQuantityChangeHandler}>
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
