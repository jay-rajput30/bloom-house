import React, { useContext, useState } from "react";

import Error from "../Error/Error";
import ProductCard from "../../components/Cards/ProductCard/ProductCard";
import "./index.css";
import { useProducts } from "../../hooks/useProducts";
import { filterContext } from "../../context/FilterProvider";
import { productContext } from "../../context/ProductProvider";

import DesktopFilter from "../../components/Filter/DesktopFilter/DesktopFilter";
import { Filter } from "react-feather";
import SearchFilter from "./SearchFilter";

function Products({
  products,
  addedToWishlist,
  wishlistBtnClickHandler,
  setShowFilter,
}) {
  const { status, error } = useProducts();

  if (error) {
    return <Error />;
  }
  if (status === "loading") {
    return <p>loading data. Please wait...</p>;
  }
  if (status === "success") {
    return (
      <div className="products-wrapper">
        <SearchFilter setShowFilter={setShowFilter} />
        <DesktopFilter />
        <ul>
          {products?.map((item) => {
            return (
              <li key={item?.id}>
                <ProductCard
                  plant={item}
                  showButton={true}
                  addedToWishlist={addedToWishlist}
                  wishlistBtnClickHandler={wishlistBtnClickHandler}
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
