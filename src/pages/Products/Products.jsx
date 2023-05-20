import React, { useContext, useState } from "react";

import Error from "../Error/Error";
import ProductCard from "../../components/Cards/ProductCard/ProductCard";
import "./index.css";
import { useProducts } from "../../hooks/useProducts";
import { filterContext } from "../../context/FilterProvider";

function Products({ products }) {
  const { status, error } = useProducts();
  const [addedToWishlist, setAddedToWishlist] = useState([]);
  const { searchTerm, searchTermChangeHandler } = useContext(filterContext);

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
          {products?.map((item) => {
            return (
              <li key={item?.id}>
                <ProductCard
                  plant={item}
                  showButton={true}
                  addedToWishlist={addedToWishlist}
                  setAddedToWishlist={setAddedToWishlist}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Products;
