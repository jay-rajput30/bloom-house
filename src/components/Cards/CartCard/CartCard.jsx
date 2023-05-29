import React, { useContext } from "react";
import { X } from "react-feather";
import "./index.css";
import { authContext } from "../../../context/AuthProvider";
import { productContext } from "../../../context/ProductProvider";
import { updateCart } from "../../../backend/controllers/cart.controller";
const CartCard = ({ cartItem }) => {
  const { loggedInUser } = useContext(authContext);
  const { dispatch } = useContext(productContext);
  const { cart } = useContext(productContext);
  const removeCartButtonClickHandler = async (item) => {
    try {
      const updatedCartItems = cart.filter(
        (cartItem) => cartItem.id !== item.id
      );

      const { data, error, success } = await updateCart(
        loggedInUser.user_id,
        updatedCartItems
      );
      if (success) {
        dispatch({ type: "REMOVE_CART", payload: item });
      }
    } catch (e) {
      console.error(e);
    }
  };
  const cartQuantityChangeHandler = async (e, cartItem) => {
    try {
      const updatedCartItems = cart.map((item) =>
        cartItem.id === item.id ? { ...item, quantity: +e.target.value } : item
      );

      const { data, error, success } = await updateCart(
        loggedInUser.user_id,
        updatedCartItems
      );
      if (success) {
        dispatch({
          type: "UPDATE_CART",
          payload: { item: cartItem, quantity: +e.target.value },
        });
      }
    } catch (e) {
      console.error(e);
    }
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
            <select onChange={(e) => cartQuantityChangeHandler(e, cartItem)}>
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
