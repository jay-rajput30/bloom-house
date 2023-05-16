import React from "react";

import Error from "../Error/Error";
import ProductCard from "../../components/Cards/ProductCard/ProductCard";
import "./index.css";
import { useProducts } from "../../hooks/useProducts";
function Products({ products, searchTerm, searchTermChangeHandler }) {
  const { status, error } = useProducts();
  const filteredProducts = products?.filter((item) =>
    item.name.toLowerCase().includes(searchTerm)
  );

  if (error) {
    return <Error />;
  }
  if (status === "loading") {
    return <p>loading data. Please wait...</p>;
  }
  if (status === "success") {
    return (
      <div className="products-wrapper">
        <input
          type="text"
          value={searchTerm}
          className="mobile-product-search"
          placeholder="enter name to search..."
          onChange={searchTermChangeHandler}
        />
        <ul>
          {filteredProducts?.map((item, idx) => {
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
