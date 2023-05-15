import React from "react";
import "./index.css";
import { useParams } from "react-router-dom";
import { useProducts } from "../../context/ProductProvider";
import { Star } from "react-feather";
import DeliveryPerks from "../../components/DeliveryPerks/DeliveryPerks";

import React from "react";

const ProductDetails = ({ plantFound }) => {
  return (
    <div className="product-details">
      <h2>{plantFound?.name}</h2>
      <div className="product-pricing-details">
        <h5 className="actual-price">
          ${plantFound?.price}
          <span className="discounted-price">
            ${Math.floor(plantFound?.price - plantFound?.price * 0.2)}
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

const AboutProduct = () => {
  return (
    <div className="about-product">
      <h2>About the product</h2>
      <p className="about-product-description">
        Lorem ipsum dolor sit amet, consect adipiscing elit. Pellentesque quis
        velit at metus pulvinar semper. Nullam vitae nisl et dolor suscipit
        blandit sit amet tristique nisl. Curabitur suscipit dictum varius.
        Maecenas urna metus, rutrum at augue eu, mollis finibus felis.
      </p>
    </div>
  );
};

function SingleProduct() {
  const { id } = useParams();

  const { products } = useProducts();
  const plantFound = products?.find((item) => item.id === +id);

  return (
    <div className="product-wrapper">
      <img src={plantFound?.thumbnail} />
      <ProductDetails plantFound={plantFound} />
      <DeliveryPerks />
      <AboutProduct />
    </div>
  );
}

export default SingleProduct;
