import React from "react";
import "./index.css";
import { useNavigate, useParams } from "react-router-dom";

import { ArrowLeft, Star } from "react-feather";
import DeliveryPerks from "../../components/DeliveryPerks/DeliveryPerks";

import React from "react";
import { useProducts } from "../../hooks/useProducts";
import { useCart } from "../../context/CartProvider";
import { useWishlist } from "../../context/WishlistProvider";

const ProductDetails = ({ plantFound }) => {
  const { cartAddBtnClickHandler } = useCart();
  const { wishlistBtnClickHandler } = useWishlist();
  const singleProductAddToCart = (plant) => {
    cartAddBtnClickHandler(plant);
  };

  const singleProductAddToWishlist = (plant) => {
    wishlistBtnClickHandler(plant);
  };
  return (
    <div className="product-details">
      <h2>{plantFound?.name}</h2>
      <div className="product-pricing-details">
        <h5 className="actual-price">
          ₹{plantFound?.price}
          <span className="discounted-price">
            ₹{Math.floor(plantFound?.price - plantFound?.price * 0.2)}
          </span>
        </h5>
        <div className="product-rating-wrapper">
          <p>{plantFound?.rating}</p>
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
  );
};

const AboutProduct = ({ text }) => {
  return (
    <div className="about-product">
      <h2>About the product</h2>
      <p className="about-product-description">{text}</p>
    </div>
  );
};

function SingleProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products } = useProducts();
  const plantFound = products?.find((item) => item.id === id);

  const backButtonClickHandler = () => {
    navigate("/products");
  };

  return (
    <div className="single-product-container">
      <div className="back-botton-wrapper">
        <ArrowLeft
          color="darkgreen"
          strokeWidth="3"
          onClick={backButtonClickHandler}
        />
      </div>

      <div className="product-wrapper">
        <div className="product-details-wrapper">
          <div>
            <img src={plantFound?.thumbnail} />
          </div>

          <ProductDetails plantFound={plantFound} />
        </div>
        <AboutProduct text={plantFound?.description} />
        <DeliveryPerks />
      </div>
    </div>
  );
}

export default SingleProduct;
