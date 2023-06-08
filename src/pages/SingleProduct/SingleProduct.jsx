import React, { useEffect } from "react";
import "./index.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { ArrowLeft, Star } from "react-feather";
import DeliveryPerks from "../../components/DeliveryPerks/DeliveryPerks";

import React from "react";
import { useProducts } from "../../hooks/useProducts";
import { useCart } from "../../context/CartProvider";
import { useWishlist } from "../../context/WishlistProvider";
import AboutProduct from "./AboutProduct";

const ProductDetails = ({ plantFound, from }) => {
  const navigate = useNavigate();
  const { cartData, cartAddBtnClickHandler } = useCart();
  const { wishlistData, wishlistBtnClickHandler } = useWishlist();
  const singleProductAddToCart = (plant) => {
    if (cartData?.some((item) => item.id === plantFound.id)) {
      ("plant found");
      navigate("/cart");
    } else {
      cartAddBtnClickHandler(plant, from);
    }
  };

  const singleProductAddToWishlist = (plant) => {
    wishlistBtnClickHandler(plant, from);
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
      <button
        className="add-to-cart"
        onClick={() => singleProductAddToCart(plantFound)}
      >
        {cartData?.some((item) => item.id === plantFound.id)
          ? "go to cart"
          : "add to cart"}
      </button>
      <button
        className="add-to-wishlist"
        onClick={() => singleProductAddToWishlist(plantFound)}
        disabled={
          wishlistData?.some((item) => item.id === plantFound.id) === true
        }
        style={{
          opacity: wishlistData?.some((item) => item.id === plantFound.id)
            ? "0.5"
            : "1",
        }}
      >
        add to wishlist
      </button>
    </div>
  );
};

function SingleProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { products } = useProducts();
  const plantFound = products?.find((item) => item.id === id);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const backButtonClickHandler = () => {
    navigate("/products");
  };

  return (
    <div className="single-product-container">
      <div className="product-wrapper">
        <div className="back-botton-wrapper">
          <ArrowLeft
            color="darkgreen"
            strokeWidth="3"
            onClick={backButtonClickHandler}
          />
        </div>
        <div className="product-details-wrapper">
          <div>
            <img src={plantFound?.thumbnail} />
          </div>

          <ProductDetails plantFound={plantFound} from={{ from: location }} />
        </div>
        <DeliveryPerks />
        <AboutProduct text={plantFound?.description} />
      </div>
    </div>
  );
}

export default SingleProduct;
