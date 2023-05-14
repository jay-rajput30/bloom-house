import React from "react";
import { useProducts } from "../../context/ProductProvider";
import Error from "../Error/Error";
import ProductCard from "../../components/Cards/ProductCard/ProductCard";
import "./index.css";
function Products() {
  const { products, status, error } = useProducts();
  if (error) {
    return <Error />;
  }
  if (status === "loading") {
    return <p>loading data. Please wait...</p>;
  }
  if (status === "success") {
    return (
      <div className="products-wrapper">
        <ul>
          {products?.map((item, idx) => {
            return (
              <li key={item?.id}>
                <ProductCard plant={item} showButton={true} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Products;
