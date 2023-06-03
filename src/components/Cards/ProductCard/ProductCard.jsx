import React, { useContext, useState } from "react";
import "./index.css";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { Heart, Star } from "react-feather";
import { useProducts } from "../../../hooks/useProducts";
import { productContext } from "../../../context/ProductProvider";
import { authContext } from "../../../context/AuthProvider";
import { updateCart } from "../../../backend/controllers/cart.controller";
import { useCart } from "../../../context/CartProvider";

const ProductCard = ({
  plant,
  showButton,
  addedToWishlist,
  wishlistBtnClickHandler,
  setWishlistToggle,
  wishlistToggle,
}) => {
  const { loggedIn, loggedInUser } = useContext(authContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { dispatch } = useProducts();
  const { cartAddBtnClickHandler, cartData } = useCart();

  const wishlistButtonClicked = (plant) => {
    setWishlistToggle((prev) => !prev);
    wishlistBtnClickHandler(plant);
  };

  return (
    <article className="product-card-wrapper">
      <figure>
        <img src={plant?.thumbnail} />
        {showButton && (
          <figcaption>
            {addedToWishlist?.includes(plant?.id) ? (
              <Heart
                color="hsl(360, 68%, 63%)"
                fill="hsl(360, 68%, 63%)"
                strokeWidth="2"
                onClick={() => wishlistButtonClicked(plant)}
              />
            ) : (
              <Heart
                color="hsl(60, 100%, 100%)"
                strokeWidth="2"
                onClick={() => wishlistButtonClicked(plant)}
              />
            )}
          </figcaption>
        )}
      </figure>

      <div className="product-card-details">
        <h4>{plant?.name}</h4>
        <div className="product-rating-wrapper">
          <p>{plant?.rating}</p>
          <Star
            size="16"
            color="hsl(36, 93%, 68%)"
            strokeWidth="3"
            fill="hsl(36, 93%, 68%)"
            className="rating-icon"
          />
        </div>

        <h5 className="actual-price">
          ${plant?.price}
          <span className="discounted-price">
            ${Math.floor(plant?.price - plant?.price * 0.2)}
          </span>
        </h5>
        {showButton && (
          <div className="button-group">
            <button
              className="cart"
              onClick={() => cartAddBtnClickHandler(plant)}
            >
              {cartData?.find((cartItem) => plant.id === cartItem.id)
                ? "go to cart"
                : "add to cart"}
            </button>
          </div>
        )}
        <Link
          to={`/product/${plant?.id}`}
          style={{ fontSize: "var(--font-length-sm3" }}
        >
          view product
        </Link>
      </div>
    </article>
  );
};

export default ProductCard;
