import React, { useContext, useState } from "react";
import "./index.css";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { Heart, Star } from "react-feather";

import { useCart } from "../../../context/CartProvider";
import { useWishlist } from "../../../context/WishlistProvider";

const ProductCard = ({ plant, showButton, from }) => {
  const { wishlistData, wishlistBtnClickHandler } = useWishlist();
  const navigate = useNavigate();
  const { cartAddBtnClickHandler, cartData } = useCart();

  const wishlistButtonClicked = (plant) => {
    wishlistBtnClickHandler(plant, from);
  };

  return (
    <article className="product-card-wrapper">
      <figure>
        <img src={plant?.thumbnail} loading="lazy" />
        {showButton && (
          <figcaption>
            {wishlistData?.some((item) => item?.id === plant.id) ? (
              <Heart
                color="hsl(360, 68%, 63%)"
                fill="hsl(360, 68%, 63%)"
                strokeWidth="2"
                onClick={() => wishlistButtonClicked(plant)}
              />
            ) : (
              <Heart
                color="hsl(178, 100%, 6%)"
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
          ₹{plant?.price}
          <span className="discounted-price">
            ₹{Math.floor(plant?.price - plant?.price * 0.2)}
          </span>
        </h5>
        {showButton && (
          <div className="button-group">
            <button
              className="cart"
              onClick={() => cartAddBtnClickHandler(plant, from)}
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
