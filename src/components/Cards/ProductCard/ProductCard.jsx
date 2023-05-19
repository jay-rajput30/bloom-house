import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { Heart, Star } from "react-feather";
import { useProducts } from "../../../hooks/useProducts";

//TODO: fix the stacking context issue;

const ProductCard = ({ plant, showButton }) => {
  const [addedToWishlist, setAddedToWishlist] = useState([]);
  const { dispatch, wishlist } = useProducts();

  const cartBtnClickHandler = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };
  const wishlistBtnClickHandler = (item) => {
    if (!wishlist?.find((item) => item.id === payload.id)) {
      setAddedToWishlist([...addedToWishlist, item]);
      dispatch({ type: "ADD_TO_WISHLIST", payload: item });
    }
  };

  return (
    <article className="product-card-wrapper">
      <figure>
        <img src={plant?.thumbnail} />
        <figcaption onClick={() => wishlistBtnClickHandler(plant)}>
          {addedToWishlist.find((item) => item.id === plant?.id) ? (
            <Heart
              color="hsl(360, 68%, 63%)"
              fill="hsl(360, 68%, 63%)"
              strokeWidth="2"
            />
          ) : (
            <Heart color="hsl(60, 100%, 100%)" strokeWidth="2" />
          )}
        </figcaption>
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
            <button className="cart" onClick={() => cartBtnClickHandler(plant)}>
              add to cart
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
