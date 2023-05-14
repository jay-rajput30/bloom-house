import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { Star } from "react-feather";
const ProductCard = ({ plant, showButton }) => {
  return (
    <article className="product-card-wrapper">
      <img src={plant?.thumbnail} />
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
            <button className="cart">add to cart</button>
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
