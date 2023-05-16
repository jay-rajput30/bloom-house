import React, { useState } from "react";
import { useProducts } from "../../hooks/useProducts";
import Products from "./Products";

const ProductsWrapper = ({ searchTerm, searchTermChangeHandler }) => {
  const [selectedRadioBtn, setSelectedRadioBtn] = useState("All");
  const radioChangeHandler = (e) => {
    setSelectedRadioBtn(e.target.value);
  };

  const { products } = useProducts();

  const filteredCategoryProducts =
    selectedRadioBtn === "All"
      ? products
      : products?.filter((item) => item.category === selectedRadioBtn);
  console.log(filteredCategoryProducts);
  return (
    <Products
      products={filteredCategoryProducts}
      searchTerm={searchTerm}
      searchTermChangeHandler={searchTermChangeHandler}
    />
  );
};

export default ProductsWrapper;
