import React, { useContext } from "react";
import { X } from "react-feather";
import "./index.css";
import { authContext } from "../../../context/AuthProvider";
import { updateCart } from "../../../backend/controllers/cart.controller";
import { useCart } from "../../../context/CartProvider";
import { Navigate, useNavigate } from "react-router-dom";
const CartCard = ({ cartItem }) => {
  const { loggedInUser, setCartToggle } = useContext(authContext);
  const { cartData } = useCart();
  const navigate = useNavigate();
  const removeCartButtonClickHandler = async (item) => {
    try {
      const updatedCartItems = cartData.filter(
        (cartItem) => cartItem.id !== item.id
      );

      const { success } = await updateCart(
        loggedInUser.user_id,
        updatedCartItems
      );
      if (success) {
        setCartToggle((prev) => !prev);
      }
    } catch (e) {
      console.error(e);
    }
  };
  const cartQuantityChangeHandler = async (e, cartItem) => {
    try {
      const updatedCartItems = cartData.map((item) =>
        cartItem.id === item.id ? { ...item, quantity: +e.target.value } : item
      );

      const { success } = await updateCart(
        loggedInUser.user_id,
        updatedCartItems
      );
      if (success) {
        setCartToggle((prev) => !prev);
      }
    } catch (e) {
      console.error(e);
    }
  };
  const cartCardClickHandler = () => {
    navigate(`/product/${cartItem?.id}`);
  };
  return (
    <article className="cart-card-wrapper" o>
      <X
        className="remove-cart-item-icon"
        onClick={() => removeCartButtonClickHandler(cartItem)}
      />
      <div>
        <img src={cartItem.thumbnail} onClick={cartCardClickHandler} />
      </div>

      <div className="cart-card-details">
        <small>{cartItem?.category}</small>
        <h4>{cartItem?.name}</h4>

        <div className="cart-item-quantity-wrapper">
          <small id="cart-card-details-price">₹{cartItem?.price}</small>
          <div>
            <span>Qty: </span>
            <select
              onChange={(e) => cartQuantityChangeHandler(e, cartItem)}
              defaultValue={cartItem?.quantity}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <button> wishlist</button>
        </div>
      </div>
    </article>
  );
};

export default CartCard;
