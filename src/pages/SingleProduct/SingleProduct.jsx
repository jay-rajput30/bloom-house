import React from "react";
import "./index.css";
import { useParams } from "react-router-dom";
import { useProducts } from "../../context/ProductProvider";
import { Star } from "react-feather";
import DeliveryPerks from "../../components/DeliveryPerks/DeliveryPerks";
function SingleProduct() {
  const { id } = useParams();

  const { products } = useProducts();
  const plantExists = products?.find((item) => item.id === +id);
  console.log({ plantExists });
  return (
    <div className="product-wrapper">
      <img src={plantExists?.thumbnail} />
      <div className="product-details">
        <h2>{plantExists?.name}</h2>
        <div className="product-pricing-details">
          <h5 className="actual-price">
            ${plantExists?.price}
            <span className="discounted-price">
              ${Math.floor(plantExists?.price - plantExists?.price * 0.2)}
            </span>
          </h5>
          <div className="product-rating-wrapper">
            <p>{plantExists?.rating}</p>
            <Star
              size="16"
              color="hsl(36, 93%, 68%)"
              strokeWidth="3"
              fill="hsl(36, 93%, 68%)"
              className="rating-icon"
            />
          </div>
        </div>
        <button className="add-to-cart">add to cart</button>
        <button className="add-to-wishlist">add to wishlist</button>
      </div>
      <DeliveryPerks />
    </div>
  );
}

export default SingleProduct;
