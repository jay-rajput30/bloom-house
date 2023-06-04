import React, { useContext, useState } from "react";
import { useProducts } from "../../hooks/useProducts";
import Products from "./Products";
import { filterContext } from "../../context/FilterProvider";
import { sortProductByPrice } from "./products.helper";

//wrapper component for products to do all the logical calculations

const ProductsWrapper = ({ setShowFilter }) => {
  const {
    searchTerm,
    selectedRadioBtn,
    selectedRating,
    selectedPrice,
    resetFilter,
  } = useContext(filterContext);

  const { products } = useProducts();

  //products filtering logic
  const filteredCategoryProducts =
    selectedRadioBtn === "All"
      ? products
      : products?.filter((item) => item.category === selectedRadioBtn);

  const ratingFilteredProducts = selectedRating
    ? filteredCategoryProducts?.filter((item) => item.rating >= selectedRating)
    : filteredCategoryProducts;

  const priceFilteredProducts = sortProductByPrice(
    selectedPrice,
    products,
    ratingFilteredProducts
  );

  const filteredProducts = priceFilteredProducts?.filter((item) =>
    item.name.toLowerCase().includes(searchTerm)
  );

  return <Products setShowFilter={setShowFilter} products={filteredProducts} />;
};

export default ProductsWrapper;
