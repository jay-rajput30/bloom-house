import React, { useContext } from "react";
import { X } from "react-feather";
import "./index.css";
import { authContext } from "../../../context/AuthProvider";
import { updateCart } from "../../../backend/controllers/cart.controller";
import { useCart } from "../../../context/CartProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useWishlist } from "../../../context/WishlistProvider";
const CartCard = ({ cartItem }) => {
  const { loggedInUser, setCartToggle } = useContext(authContext);
  const { wishlistBtnClickHandler } = useWishlist();
  const { cartData } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const cartCardAddToWishlist = (cartItem, from) => {
    wishlistBtnClickHandler(cartItem, from);
  };
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
        toast.error("removed from cart", {
          position: toast.BOTTOM_CENTER,
          theme: "colored",
          autoClose: 1000,
        });
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
    <article className="cart-card-wrapper">
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
              // defaultValue={cartItem?.quantity}
              value={cartItem?.quantity}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <button
            onClick={() => cartCardAddToWishlist(cartItem, { from: location })}
          >
            wishlist
          </button>
        </div>
      </div>
    </article>
  );
};

export default CartCard;
