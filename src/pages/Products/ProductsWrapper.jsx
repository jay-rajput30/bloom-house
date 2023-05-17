import React, { useContext, useState } from "react";
import { useProducts } from "../../hooks/useProducts";
import Products from "./Products";
import { filterContext } from "../../context/FilterProvider";

//wrapper component for products to do all the logical calculations

const ProductsWrapper = () => {
  const { searchTerm, selectedRadioBtn, selectedRating, selectedPrice } =
    useContext(filterContext);

  const { products } = useProducts();

  //products filtering logic
  const filteredCategoryProducts =
    selectedRadioBtn === "All"
      ? products
      : products?.filter((item) => item.category === selectedRadioBtn);

  const ratingFilteredProducts = selectedRating
    ? filteredCategoryProducts?.filter((item) => item.rating >= selectedRating)
    : filteredCategoryProducts;

  const priceFilteredProducts = selectedPrice
    ? ratingFilteredProducts?.filter((item) => item.price <= selectedPrice)
    : ratingFilteredProducts;

  const filteredProducts = priceFilteredProducts?.filter((item) =>
    item.name.toLowerCase().includes(searchTerm)
  );
  console.log({ priceFilteredProducts, selectedPrice });

  return <Products products={filteredProducts} />;
};

export default ProductsWrapper;
