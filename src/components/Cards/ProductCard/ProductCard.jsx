import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { Heart, Star } from "react-feather";
import { useProducts } from "../../../hooks/useProducts";

//TODO: fix the stacking context issue;

const ProductCard = ({ plant, showButton }) => {
  const [addedToWishlist, setAddedToWishlist] = useState([]);
  const { dispatch } = useProducts();
  console.log({ addedToWishlist });
  const cartBtnClickHandler = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };
  const wishlistBtnClickHandler = (item) => {
    setAddedToWishlist([...addedToWishlist, item]);
    dispatch({ type: "ADD_TO_WISHLIST", payload: item });
  };
  console.log(addedToWishlist.find((item) => item.id !== plant.id));
  return (
    <article className="product-card-wrapper">
      <figure>
        <img src={plant?.thumbnail} />
        <figcaption>
          {addedToWishlist.find((item) => item.id !== plant?.id) && (
            <Heart
              color="hsl(60, 100%, 100%)"
              strokeWidth="2"
              onClick={() => wishlistBtnClickHandler(plant)}
            />
          )}
          {/* (
            <Heart
              color="hsl(360, 68%, 63%)"
              strokeWidth="2"
              fill="hsl(360, 68%, 63%)"
              onClick={() => wishlistBtnClickHandler(plant)}
            />
          )} */}
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
