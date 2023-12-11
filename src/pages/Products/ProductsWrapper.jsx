import React, { useContext } from "react";
import { useProducts } from "../../hooks/useProducts";
import Products from "./Products";
import { sortProductByPrice } from "./products.helper";
import { filterContext } from "../../context/FilterProvider";

const ProductsWrapper = ({ setShowFilter }) => {
  const { products } = useProducts();
  const {
    searchTerm,
    selectedCategoryRadioBtn,
    selectedRating,
    selectedPrice,
  } = useContext(filterContext);

  //products filtering logic
  // const getFilteredItems = () => {
  //   const filteredCategoryProducts =
  //     selectedCategoryRadioBtn === "All"
  //       ? products
  //       : products?.filter(
  //           (item) => item.category === selectedCategoryRadioBtn
  //         );

  //   const ratingFilteredProducts = selectedRating
  //     ? filteredCategoryProducts?.filter(
  //         (item) => item.rating > +selectedRating
  //       )
  //     : filteredCategoryProducts;

  //   const priceFilteredProducts = sortProductByPrice(
  //     selectedPrice,
  //     products,
  //     ratingFilteredProducts
  //   );

  //   const filteredProducts = priceFilteredProducts?.filter((item) =>
  //     item.name.toLowerCase().includes(searchTerm)
  //   );
  //   return filteredProducts;
  // };

  const filteredCategoryProducts =
    selectedCategoryRadioBtn === "All"
      ? products
      : products?.filter((item) => item.category === selectedCategoryRadioBtn);

  const ratingFilteredProducts = selectedRating
    ? filteredCategoryProducts?.filter((item) => item.rating > +selectedRating)
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
